<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Life Game</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/kurukuruz/life-game"
        target="_blank"
        text
      >
        <span>GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <AppMain/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppMain from '@/components/AppMain.vue';

@Component({
  components: {
    AppMain,
  },
})
export default class App extends Vue {}
</script>
