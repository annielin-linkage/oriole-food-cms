<template>
  <section class="text-weight-light text-body2 text-grey-8 q-pa-lg q-gutter-y-md">
    <!-- Name -->
    <div class="q-gutter-y-xs">
      <div>Name :</div>
      <div class="text-blue-4 text-weight-regular">{{ data.name }}</div>
    </div>
    <!-- Contact -->
    <div class="q-gutter-y-xs">
      <div>Contact :</div>
      <div class="text-blue-4 text-weight-regular">{{ data.contact }}</div>
    </div>
    <!-- Address -->
    <div class="q-gutter-y-xs">
      <div>Address :</div>
      <div class="text-blue-4 text-weight-regular">{{ data.address }}</div>
    </div>
    <q-separator color="grey-3" />
    <!-- Deliveried Time -->
    <div class="q-gutter-y-xs">
      <div>Deliveried Time :</div>
      <div class="text-blue-4 text-weight-regular">{{ done ? data.deliveriedTime : '-' }}</div>
    </div>

    <!-- Sign -->
    <Sign />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Sign from 'components/Delivery/Sign.vue';

import { IDelivery } from 'src/stores/order-store';

export default defineComponent({
  name: 'Location',

  components: {
    Sign,
  },

  props: {
    data: {
      type: Object as PropType<IDelivery>,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
