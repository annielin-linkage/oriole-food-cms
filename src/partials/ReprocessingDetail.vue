<template>
  <q-dialog maximized transition-show="slide-left" transition-hide="slide-right" v-model="model">
    <q-card>
      <!-- Header -->
      <q-toolbar class="text-white" :class="headerClass">
        <q-btn flat dense round icon="chevron_left" aria-label="Back" @click="onBack()" />

        <q-toolbar-title class="text-subtitle2 text-weight-regular q-pa-none">
          DN2206220001
        </q-toolbar-title>
      </q-toolbar>

      <StepTabs :steps="['Outstanding', 'Processing', 'Enquiry']" :step="step">
        <template #step-Outstanding>
          <StepOutstanding />
        </template>
        <template #step-Processing>
          <StepProcessing />
        </template>
        <template #step-Enquiry>
          <StepEnquiry />
        </template>
      </StepTabs>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useModelWrapper } from 'utils/hooks';

import StepTabs from 'components/StepTabs.vue';
import StepOutstanding from 'components/Reprocessing/StepOutstanding.vue';
import StepProcessing from 'components/Reprocessing/StepProcessing.vue';
import StepEnquiry from 'components/Reprocessing/StepEnquiry.vue';

export default defineComponent({
  name: 'DeliveryDetail',

  components: {
    StepTabs,
    StepOutstanding,
    StepProcessing,
    StepEnquiry,
  },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    headerClass: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],
  setup(props, context) {
    const model = ref(useModelWrapper(props, context.emit, 'modelValue'));

    const step = ref('Outstanding');

    const onBack = () => {
      model.value = false;
    };

    return {
      model,
      step,
      onBack,
    };
  },
});
</script>
