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

@Component
export default class AppField extends Vue {
  private cols: number = 15;
  private rows: number = 8;
  private blockSize: number = 50;
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