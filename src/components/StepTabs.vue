<template>
  <div>
    <!-- Step -->
    <Step :value="steps" :step="stepActive" />

    <!-- Step Tabs -->
    <q-tab-panels v-model="stepActive" animated class="q-mt-lg">
      <q-tab-panel
        v-for="stepItem in steps"
        :key="`step-${stepItem}`"
        :name="stepItem"
        class="q-pa-none"
      >
        <slot :name="`step-${stepItem}`" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Step from 'components/Step.vue';

export default defineComponent({
  name: 'StepTabs',

  components: {
    Step,
  },

  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    step: {
      type: String || Number,
      default: '',
    },
  },

  setup(props) {
    const stepActive = ref(props.step);

    return { stepActive };
  },
});
</script>
