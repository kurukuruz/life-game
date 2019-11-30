<template>
  <v-container>
    <v-sheet
      v-for="y in rows"
      :key="y"
      class="app-flex app-flex-center"
    >
      <v-card
        v-for="x in cols"
        :key="x"
        outlined
        tile
        :width="blockSize"
        :height="blockSize"
      ></v-card>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { prefModule } from '@/store/modules/preference';

@Component
export default class AppField extends Vue {
  get cols(): number {
    return prefModule.COLS;
  }

  get rows(): number {
    return prefModule.ROWS;
  }

  private blockSize: number = 30;
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