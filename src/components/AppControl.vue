<template>
  <v-card
    class="d-flex"
  >
    <div
      class="flex-grow-1"
      v-show="!isPlaying"
    >
      <v-btn
        @click="doPlay"
        block
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>          
    </div>
    <div
      class="flex-grow-1"
      v-show="isPlaying"
    >
      <v-btn
        @click="doPause"
        block
      >
        <v-icon>mdi-pause</v-icon>
      </v-btn>          
    </div>
    <div
      class="flex-grow-1"
    >
      <v-btn
        @click="doNext"
        block
        :disabled="isPlaying"
      >
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { blockStatesModule } from '@/store/modules/block-states';

@Component
export default class AppControl extends Vue {
  private isPlaying: boolean = false;
  private timerID?: number;

  private doNext(): void {
    blockStatesModule.next();
  }

  private doPlay(): void {
    this.isPlaying = true;
    this.timerID = setInterval(this.doNext, 500);
  }

  private doPause(): void {
    clearInterval(this.timerID);
    this.isPlaying = false;
  }
}
</script>