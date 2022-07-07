<template>
  <Tabs :tabs="['Location', 'Details']" :tab="tab">
    <template #tab-Location>
      <Location v-if="data" :data="data" done />
    </template>
    <template #tab-Details>
      <Detail v-if="data" :data="data" />
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
import Location from 'components/Delivery/Location.vue';
import Detail from 'components/Delivery/Detail.vue';
import { IDelivery } from 'src/stores/order-store';

export default defineComponent({
  name: 'StepEnquiry',

  components: {
    Tabs,
    Location,
    Detail,
  },

  props: {
    data: {
      type: Object as PropType<IDelivery>,
      required: true,
    },
  },

  emits: ['on-cancel'],

  setup(props, context) {
    const tab = ref('Location');

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
