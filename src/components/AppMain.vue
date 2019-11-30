<template>
  <v-container>
    <v-row>
      <v-col>
        <AppField/>
      </v-col>
      <v-col>
        <AppPreference/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AppField from '@/components/AppField.vue';
import AppPreference from '@/components/AppPreference.vue';

@Component({
  components: {
    AppField,
    AppPreference,
  },
})
export default class AppMain extends Vue {}
</script>