<template>
  <div>
    <div
      v-for="(row, index) in blockStates"
      :key="index"
      class="d-flex justify-center"
    >
      <v-card
        v-for="(state, index) in row"
        :key="index"
        outlined
        tile
        :width="blockSize"
        :height="blockSize"
        :dark="state"
      />
    </div>
  </div>
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

  get fieldSize(): number {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs': return this.$vuetify.breakpoint.width * 0.8;
      case 'xl': return 800;
    }
    return 500;
  }

  get blockSize(): number {
    return Math.min(this.fieldSize / this.cols, this.fieldSize / this.rows);
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
