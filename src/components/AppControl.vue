<template>
  <v-card>
    <div
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
    </div>
    <v-slider
      v-model="speed"
      @change="changeSpeed"
      label="speed"
      min="10"
      max="80"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { blockStatesModule } from '@/store/modules/block-states';

@Component
export default class AppControl extends Vue {
  private isPlaying: boolean = false;
  private timerID?: number;
  private speed: number = 20;

  get interval(): number {
    return 10000 / this.speed;
  }

  private doNext(): void {
    blockStatesModule.next();
  }

  private doPlay(): void {
    this.isPlaying = true;
    this.timerID = setInterval(this.doNext, this.interval);
  }

  private doPause(): void {
    clearInterval(this.timerID);
    this.timerID = undefined;
    this.isPlaying = false;
  }

  private changeSpeed(): void {
    if (this.timerID !== undefined) {
      this.doPause();
      this.doPlay();
    }
  }
}
</script>