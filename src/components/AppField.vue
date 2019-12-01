<template>
  <v-container>
    <div
      v-for="(row, index) in blockStates"
      :key="index"
      class="app-flex app-flex-center"
    >
      <v-card
        v-for="(state, index) in row"
        :key="index"
        outlined
        tile
        :width="blockSize"
        :height="blockSize"
        :dark="state"
      ></v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { prefModule } from '@/store/modules/preference';
import { blockStatesModule } from '@/store/modules/block-states';

@Component
export default class AppField extends Vue {
  get blockStates(): boolean[][] {
    return blockStatesModule.BLOCK_STATES;
  }

  get cols(): number {
    return prefModule.COLS;
  }

  get rows(): number {
    return prefModule.ROWS;
  }

  get blockSize(): number {
    return Math.min(500 / this.cols, 500 / this.rows);
  }

  private mounted(): void {
    blockStatesModule.refreshAll();
  }

  @Watch('cols')
  private rearrayX(): void {
    blockStatesModule.changeColNum();
  }

  @Watch('rows')
  private rearrayY(): void {
    blockStatesModule.changeRowNum();
  }
}
</script>

<style scoped>
.app-flex {
  display: flex !important
}
.app-flex.app-flex-center {
  justify-content: center
}
</style>