<template>
  <q-dialog maximized transition-show="slide-left" transition-hide="slide-right" v-model="model">
    <q-card>
      <!-- Header -->
      <q-toolbar class="bg-blue-4 text-white">
        <q-btn flat dense round icon="chevron_left" aria-label="Back" @click="onBack()" />

        <q-toolbar-title class="text-subtitle2 text-weight-regular q-pa-none">
          DN2206220001
        </q-toolbar-title>
      </q-toolbar>

      <StepTabs :steps="['Outstanding', 'Enquiry']" :step="step">
        <template #step-Outstanding>
          <StepOutstanding @on-completed="onCompleted()" @on-cancel="onCancel()" />
        </template>
        <template #step-Enquiry>
          <StepEnquiry @on-cancel="onCancel()" />
        </template>
      </StepTabs>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useModelWrapper } from 'utils/hooks';

import StepTabs from 'components/StepTabs.vue';
import StepOutstanding from 'components/Delivery/StepOutstanding.vue';
import StepEnquiry from 'components/Delivery/StepEnquiry.vue';

export default defineComponent({
  name: 'DeliveryDetail',

  components: {
    StepTabs,
    StepOutstanding,
    StepEnquiry,
  },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue'],

  setup(props, context) {
    const model = ref(useModelWrapper(props, context.emit, 'modelValue'));

    const step = ref('Outstanding');

    const onBack = () => {
      model.value = false;
    };

    const onCompleted = () => {
      step.value = 'Enquiry';
    };

    const onCancel = () => {
      model.value = false;
    };

    return {
      model,
      step,
      onBack,
      onCompleted,
      onCancel,
    };
  },
});
</script>
