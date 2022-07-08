<template>
  <Tabs :tabs="['Location', 'Details']" :tab="tab">
    <template #tab-Location>
      <Location v-if="data" :data="data" :done="false" />
      <div class="q-pa-md">
        <Sign />
      </div>
    </template>
    <template #tab-Details>
      <Detail v-if="data" :data="data" />
    </template>
  </Tabs>
  <div class="row q-pa-lg q-pb-xl q-col-gutter-x-md bg-grey-1">
    <div class="col-7">
      <q-btn
        no-caps
        unelevated
        size="md"
        color="blue-4"
        class="text-caption full-width"
        label="Completed"
        @click="onNext()"
      />
    </div>
    <div class="col-5">
      <q-btn
        no-caps
        unelevated
        size="md"
        color="grey-6"
        class="text-caption full-width"
        label="Cancel"
        @click="onCancel()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import Tabs from 'components/Tabs.vue';
import Location from 'components/Delivery/Location.vue';
import Detail from 'components/Delivery/Detail.vue';
import Sign from 'components/Delivery/Sign.vue';
import { IDelivery } from 'src/stores/order-store';

export default defineComponent({
  name: 'StepOutstanding',

  components: {
    Tabs,
    Location,
    Detail,
    Sign,
  },

  props: {
    data: {
      type: Object as PropType<IDelivery>,
      required: true,
    },
  },

  emits: ['on-next', 'on-cancel'],

  setup(props, context) {
    const tab = ref('Location');

    const onNext = () => {
      context.emit('on-next');
    };

    const onCancel = () => {
      context.emit('on-cancel');
    };

    return {
      tab,
      onNext,
      onCancel,
    };
  },
});
</script>
