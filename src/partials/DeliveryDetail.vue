<template>
  <q-dialog maximized transition-show="slide-left" transition-hide="slide-right" v-model="model">
    <q-card class="column full-height">
      <!-- Header -->
      <q-toolbar class="bg-blue-4 text-white col-auto">
        <q-btn flat dense round icon="chevron_left" aria-label="Back" @click="onBack()" />

        <q-toolbar-title class="text-subtitle2 text-weight-regular q-pa-none">
          DN2206220001
        </q-toolbar-title>
      </q-toolbar>

      <StepTabs
        class="col scroll"
        style="overflow-y: scroll"
        :steps="['Outstanding', 'Enquiry']"
        :step="step"
      >
        <template #step-Outstanding>
          <StepOutstanding @on-next="onNext()" @on-cancel="onCancel()" />
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

    const onNext = () => {
      step.value = 'Enquiry';
    };

    const onCancel = () => {
      model.value = false;
    };

    return {
      model,
      step,
      onBack,
      onNext,
      onCancel,
    };
  },
});
</script>
