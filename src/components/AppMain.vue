<template>
  <v-container>
    <AppField/>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AppField from '@/components/AppField.vue';

@Component({
  components: {
    AppField,
  },
})
export default class AppMain extends Vue {}
</script>