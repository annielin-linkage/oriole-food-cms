<template>
  <section
    class="text-weight-regular text-body2 text-grey-8 q-pa-lg q-gutter-y-md"
    style="line-height: 23px"
  >
    <div>Source :</div>

    <div v-for="item of data.source" :key="item.id" class="q-gutter-y-xs">
      <div>{{ item.description }}</div>
      <div class="flex text-blue-4 items-center justify-between text-italic">
        <div>{{ item.stockNo }}</div>
        <div>x{{ item.qty }}</div>
      </div>
      <q-separator color="grey-3" class="q-my-md" />
    </div>

    <q-icon name="south" size="xs" class="q-my-md" color="grey-4" />

    <div>Reprocess :</div>

    <div class="q-gutter-y-xs">
      <div>{{ data.resourcess.description }}</div>
      <div class="flex text-blue-4 items-center justify-between text-italic">
        <div>{{ data.resourcess.stockNo }}</div>
        <div>x{{ data.resourcess.qty }}</div>
      </div>
      <q-separator color="grey-3" class="q-my-md" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { IDelivery } from 'src/stores/order-store';

export default defineComponent({
  name: 'Location',

  props: {
    data: {
      type: Object as PropType<IDelivery>,
      required: true,
    },
  },
});
</script>
