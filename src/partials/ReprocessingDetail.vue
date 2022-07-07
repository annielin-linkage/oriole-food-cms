<template>
  <q-dialog maximized transition-show="slide-left" transition-hide="slide-right" v-model="model">
    <q-card class="column full-height">
      <!-- Header -->
      <q-toolbar class="bg-yellow-8 text-white col-auto">
        <q-btn flat dense round icon="chevron_left" aria-label="Back" @click="onBack()" />

        <q-toolbar-title class="text-subtitle2 text-weight-regular q-pa-none">
          {{ data.orderNo }}
        </q-toolbar-title>
      </q-toolbar>

      <StepTabs
        class="col scroll"
        ref="elTab"
        style="overflow-y: scroll"
        :steps="['Outstanding', 'Processing', 'Enquiry']"
        :step="step"
      >
        <template #step-Outstanding>
          <StepOutstanding v-if="data" :data="data" @on-next="onNext('Processing')" />
        </template>
        <template #step-Processing>
          <StepProcessing
            v-if="data"
            :data="data"
            @on-next="onNext('Enquiry')"
            @on-save="onSave()"
          />
        </template>
        <template #step-Enquiry>
          <StepEnquiry v-if="data" :data="data" @on-cancel="onCancel()" />
        </template>
      </StepTabs>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { useModelWrapper } from 'utils/hooks';

import StepTabs from 'components/StepTabs.vue';
import StepOutstanding from 'components/Reprocessing/StepOutstanding.vue';
import StepProcessing from 'components/Reprocessing/StepProcessing.vue';
import StepEnquiry from 'components/Reprocessing/StepEnquiry.vue';
import { IOrder } from 'src/stores/order-store';

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
    data: {
      type: Object as PropType<IOrder>,
      required: true,
    },
  },

  emits: ['update:modelValue'],
  setup(props, context) {
    const model = ref(useModelWrapper(props, context.emit, 'modelValue'));

    const step = ref(props.data.status);

    const onBack = () => {
      model.value = false;
    };

    const onNext = (nextPage: string) => {
      step.value = nextPage as 'Outstanding' | 'Processing' | 'Enquiry';
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
