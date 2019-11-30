<template>
  <v-container>
    <v-row>
      <v-col>
        <AppField/>
      </v-col>
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <AppControl/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <AppPreference/>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AppField from '@/components/AppField.vue';
import AppPreference from '@/components/AppPreference.vue';
import AppControl from '@/components/AppControl.vue';

@Component({
  components: {
    AppField,
    AppPreference,
    AppControl,
  },
})
export default class AppMain extends Vue {}
</script>