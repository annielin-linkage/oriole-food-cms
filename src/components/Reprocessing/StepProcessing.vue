<template>
  <Tabs :tabs="['Process', 'Details']" :tab="tab">
    <template #tab-Process>
      <OrderForm
        v-if="data"
        :data="data"
        :form="form"
        @on-startreprocess="onStartreprocess"
        @on-startreprocess2="onStartreprocess2"
        @on-printingLabels="onPrintingLabels"
      />
    </template>
    <template #tab-Details>
      <Detail v-if="data" :data="data" />
      <LabourRequest v-if="data" :data="data" />
    </template>
  </Tabs>

  <div class="row q-col-gutter-x-md q-pa-lg q-pb-xl bg-grey-1">
    <div class="col-7">
      <q-btn
        no-caps
        unelevated
        size="md"
        color="yellow-8"
        class="text-caption full-width"
        label="Submit"
        @click="onNext()"
      />
    </div>
    <div class="col-5">
      <q-btn
        no-caps
        unelevated
        size="md"
        color="grey-3"
        class="text-caption full-width"
        label="Save"
        @click="onSave()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, reactive } from 'vue';
import { date } from 'quasar';

import Tabs from 'components/Tabs.vue';
import OrderForm from 'components/Reprocessing/OrderForm.vue';
import Detail from 'components/Reprocessing/Detail.vue';
import LabourRequest from 'components/Reprocessing/LabourRequest.vue';
import { IOrder, useOrderStore } from 'src/stores/order-store';

export default defineComponent({
  name: 'StepProcessing',

  components: {
    Tabs,
    OrderForm,
    Detail,
    LabourRequest,
  },

  props: {
    data: {
      type: Object as PropType<IOrder>,
      required: true,
    },
  },

  emits: ['on-next', 'on-save'],

  setup(props, context) {
    const $storeOrder = useOrderStore();

    const tab = ref('Process');

    const form = reactive({
      startReprocess: props.data.startReprocess,
      startReprocess2: props.data.startReprocess2,
      printingLabels: props.data.printingLabels,
      status: props.data.status,
    });

    const onNext = () => {
      if (form.status === 'Processing') {
        form.status = 'Enquiry';
        $storeOrder.orderSave(props.data.id, form);
        context.emit('on-next');
      }
    };

    const onSave = () => {
      if (form.startReprocess2.length === 0 || form.printingLabels.length === 0) {
        form.status = 'Processing';
        $storeOrder.orderSave(props.data.id, form);
        context.emit('on-save');
      }
    };

    const onStartreprocess = () => {
      form.startReprocess = date.formatDate(new Date(), 'DD/MM/YYYY HH:mm:ss');
    };

    const onStartreprocess2 = () => {
      form.startReprocess2 = date.formatDate(new Date(), 'DD/MM/YYYY HH:mm:ss');
    };

    const onPrintingLabels = () => {
      form.printingLabels = date.formatDate(new Date(), 'DD/MM/YYYY HH:mm:ss');
    };

    return {
      tab,
      form,
      onNext,
      onSave,
      onStartreprocess,
      onStartreprocess2,
      onPrintingLabels,
    };
  },
});
</script>
