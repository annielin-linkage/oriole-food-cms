<template>
  <Tabs :tabs="['Confirmed', 'Details']" :tab="tab">
    <template #tab-Confirmed>
      <OrderForm readonly v-if="data" :data="data" />
    </template>
    <template #tab-Details>
      <Detail v-if="data" :data="data" />
      <LabourRequest v-if="data" :data="data" />
    </template>
  </Tabs>
  <div class="flex justify-center items-center q-pa-lg q-pb-xl bg-grey-1">
    <q-btn
      no-caps
      unelevated
      size="md"
      color="grey-6"
      class="text-caption"
      style="width: 50%"
      label="Back to list"
      @click="onCancel()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import Tabs from 'components/Tabs.vue';
import OrderForm from 'components/Reprocessing/OrderForm.vue';
import Detail from 'components/Reprocessing/Detail.vue';
import LabourRequest from 'components/Reprocessing/LabourRequest.vue';
import { IOrder } from 'src/stores/order-store';

export default defineComponent({
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

  emits: ['on-cancel'],

  setup(props, context) {
    const tab = ref('Confirmed');

    const onCancel = () => {
      context.emit('on-cancel');
    };

    return {
      tab,
      onCancel,
    };
  },
});
</script>
