<template>
  <q-list>
    <!-- 一筆訂單 開始 -->
    <div v-for="i of 10" :key="i">
      <q-item>
        <q-item-section>
          <q-item-label class="text-subtitle2 text-weight-regular text-blue-13">
            DN2206220001
          </q-item-label>
          <q-item-label caption class="text-grey-5">Create: 07/05/2022 15:33</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-btn flat round color="blue-13" icon="edit" @click="onDetail()" />
        </q-item-section>
      </q-item>
      <q-separator spaced color="grey-3" />
    </div>
    <!-- 一筆訂單 結尾 -->
  </q-list>

  <!-- Detail Page -->
  <DeliveryDetail v-model="model" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import DeliveryDetail from 'partials/Delivery/DeliveryDetail.vue';

export default defineComponent({
  name: 'DeliveryList',
  components: {
    DeliveryDetail,
  },
  setup() {
    const model = ref(false);

    const onDetail = () => {
      model.value = true;
    };

    return {
      model,
      onDetail,
    };
  },
});
</script>
