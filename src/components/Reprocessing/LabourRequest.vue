<template>
  <section class="text-weight-regular text-body2 text-grey-8 q-pa-md bg-grey-1 q-gutter-y-sm">
    <div class="text-body1 text-grey-5">Labour Request</div>

    <div class="flex items-center justify-between">
      <div>Labour :</div>
      <div class="text-italic text-blue-4">{{ data.labour }}</div>
    </div>
    <div class="flex items-center justify-between">
      <div>Time :</div>
      <div class="text-italic text-blue-4">{{ data.time }} mins</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { IOrder } from 'src/stores/order-store';

export default defineComponent({
  name: 'LabourRequest',
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object as PropType<IOrder>,
      required: true,
    },
  },
});
</script>
