<template>
  <div class="column full-height">
    <div class="col-auto">
      <!-- Filters -->
      <section class="text-weight-light text-body2 q-pa-lg q-gutter-y-md">
        <div>
          <div>From :</div>
          <FilterDate :rules="[]" v-model="filters.dateFrom" />
        </div>
        <div>
          <div>To :</div>
          <FilterDate :rules="[]" v-model="filters.dateTo" />
        </div>
      </section>
    </div>
    <div class="col">
      <!-- Tabs -->
      <Tabs :tabs="['Outstanding', 'Enquiry']" :tab="tab" :breakpoint="0" :align="'left'">
        <!-- Outstanding -->
        <template #tab-Outstanding>
          <List delivery :data="findDeliveryOutstanding" @onDetail="onDetail" />
        </template>
        <!-- Enquiry -->
        <template #tab-Enquiry>
          <List delivery :data="findDeliveryEnquiry" @onDetail="onDetail" icon="search" />
        </template>
      </Tabs>
    </div>
  </div>
  <!-- Detail Page -->
  <DeliveryDetail v-if="order" :data="order" v-model="model" :headerClass="'bg-blue-4'" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';

import FilterDate from 'components/Input/FilterDate.vue';
import Tabs from 'components/Tabs.vue';
import List from 'components/List.vue';
import DeliveryDetail from 'partials/DeliveryDetail.vue';

import { IDelivery, useOrderStore } from 'src/stores/order-store';

export default defineComponent({
  name: 'Delivery',

  components: {
    FilterDate,
    Tabs,
    List,
    DeliveryDetail,
  },

  setup() {
    const $storeOrder = useOrderStore();

    const { findDeliveryEnquiry, findDeliveryOutstanding } = storeToRefs($storeOrder);

    const model = ref(false);
    const tab = ref('Outstanding');

    const filters = ref({
      dateFrom: '',
      dateTo: '',
    });

    const order = ref<IDelivery>();

    const onDetail = (value: IDelivery) => {
      model.value = true;
      order.value = value;
    };

    return {
      model,
      tab,
      filters,
      order,
      findDeliveryEnquiry,
      findDeliveryOutstanding,
      onDetail,
    };
  },
});
</script>
