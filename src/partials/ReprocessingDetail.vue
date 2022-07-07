<template>
  <q-dialog maximized transition-show="slide-left" transition-hide="slide-right" v-model="model">
    <q-card class="column full-height">
      <!-- Header -->
      <q-toolbar class="bg-yellow-8 text-white col-auto">
        <q-btn flat dense round icon="chevron_left" aria-label="Back" @click="onBack()" />

        <q-toolbar-title class="text-subtitle2 text-weight-regular q-pa-none">
          DN2206220001
        </q-toolbar-title>
      </q-toolbar>

      <StepTabs
        class="col scroll"
        style="overflow-y: scroll"
        :steps="['Outstanding', 'Processing', 'Enquiry']"
        :step="step"
      >
        <template #step-Outstanding>
          <StepOutstanding @on-next="onNext('Processing')" />
        </template>
        <template #step-Processing>
          <StepProcessing @on-next="onNext('Enquiry')" @on-save="onSave()" />
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
  },

  emits: ['update:modelValue'],
  setup(props, context) {
    const model = ref(useModelWrapper(props, context.emit, 'modelValue'));

    const step = ref('Outstanding');

    const onBack = () => {
      model.value = false;
    };

    const onNext = (nextPage: string) => {
      step.value = nextPage;
    };

    const onSave = () => {
      model.value = false;
    };

    const onCancel = () => {
      model.value = false;
    };

    return {
      model,
      step,
      onBack,
      onNext,
      onSave,
      onCancel,
    };
  },
});
</script>
