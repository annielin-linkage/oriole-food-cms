<template>
  <Detail v-if="data" :data="data" />
  <LabourRequest v-if="data" :data="data" />
  <div class="flex justify-center items-center q-pa-lg q-pb-xl bg-grey-1">
    <q-btn
      no-caps
      unelevated
      size="md"
      color="yellow-8"
      class="text-caption"
      style="width: 50%"
      label="Start Reprocessing"
      @click="onNext()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Detail from 'components/Reprocessing/Detail.vue';
import LabourRequest from 'components/Reprocessing/LabourRequest.vue';
import { IOrder } from 'src/stores/order-store';

export default defineComponent({
  components: {
    Detail,
    LabourRequest,
  },

  props: {
    data: {
      type: Object as PropType<IOrder>,
      required: true,
    },
  },

  emits: ['on-next'],

  setup(props, context) {
    const onNext = () => {
      context.emit('on-next');
    };

    return {
      onNext,
    };
  },
});
</script>
