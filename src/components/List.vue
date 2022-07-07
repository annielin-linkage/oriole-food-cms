<template>
  <q-list>
    <!-- 一筆訂單 開始 -->
    <div v-for="i of data" :key="i.id">
      <q-item clickable v-ripple @click="$emit('onDetail', i)">
        <q-item-section>
          <q-item-label class="text-subtitle2 text-weight-regular text-blue-11">
            {{ i.orderNo }}
          </q-item-label>
          <q-item-label caption class="text-grey-5">Create: {{ i.create }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-icon flat round color="blue-11" :name="icon" />
        </q-item-section>
      </q-item>
      <q-separator spaced color="grey-3" />
    </div>
    <!-- 一筆訂單 結尾 -->
  </q-list>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

import { IOrder, IDelivery } from 'src/stores/order-store';

export default defineComponent({
  name: 'List',

  props: {
    icon: {
      type: String,
      default: 'edit',
    },
    data: {
      type: Array as PropType<IOrder[] | IDelivery[]>,
      default: () => [],
    },
    delivery: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    const model = ref(false);

    return {
      model,
    };
  },
});
</script>
