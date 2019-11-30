<template>
  <v-container>
    <v-sheet
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
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { prefModule } from '@/store/modules/preference';

@Component
export default class AppField extends Vue {
  private blockStates: boolean[][] = [];

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
    for (let y = 0; y < this.rows; y++) {
      const row: boolean[] = [];
      for (let x = 0; x < this.cols; x++) {
        row.push(Math.random() < 0.3);
      }
      this.blockStates.push(row);
    }
  }

  @Watch('cols')
  private rearrayX(): void {
    this.blockStates = this.blockStates
      .map((row) => (row.length < this.cols ? row.concat(new Array<boolean>(this.cols - row.length)) : row))
      .map((row) => row.slice(0, this.cols));
  }

  @Watch('rows')
  private rearrayY(): void {
    this.blockStates =
      (this.blockStates.length < this.rows
        ? this.blockStates.slice(0)
          .concat(new Array<boolean[]>(this.rows - this.blockStates.length)
            .fill(new Array<boolean>(this.cols)))
        : this.blockStates.slice(0))
      .slice(0, this.rows);
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