<template>
  <v-card>
    <v-btn
      @click="onRefresh"
      block
    >
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
    <v-slider
      :value="cols"
      @change="onChangeCols"
      label="cols"
      min="10"
      max="50"
      thumb-label
    ></v-slider>
    <v-slider
      :value="rows"
      @change="onChangeRows"
      label="rows"
      min="10"
      max="50"
      thumb-label
    ></v-slider>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { prefModule } from '@/store/modules/preference';
import { blockStatesModule } from '@/store/modules/block-states';

@Component
export default class AppPreference extends Vue {
  get cols(): number {
    return prefModule.COLS;
  }

  get rows(): number {
    return prefModule.ROWS;
  }

  private onChangeCols(newValue: number): void {
    prefModule.setCols(newValue);
  }

  private onChangeRows(newValue: number): void {
    prefModule.setRows(newValue);
  }

  @Emit('refresh')
  private onRefresh(): void {
    blockStatesModule.refreshAll();
  }
}
</script>