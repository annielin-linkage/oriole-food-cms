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
        <template #tab-Outstanding> <List @onDetail="onDetail" /></template>
        <!-- Enquiry -->
        <template #tab-Enquiry> <List @onDetail="onDetail" icon="search" /></template>
      </Tabs>
    </div>
  </div>
  <!-- Detail Page -->
  <DeliveryDetail v-model="model" :headerClass="'bg-blue-4'" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import FilterDate from 'components/Input/FilterDate.vue';
import Tabs from 'components/Tabs.vue';
import List from 'components/List.vue';
import DeliveryDetail from 'partials/DeliveryDetail.vue';

export default defineComponent({
  name: 'Delivery',

  components: {
    FilterDate,
    Tabs,
    List,
    DeliveryDetail,
  },

  setup() {
    const model = ref(false);
    const tab = ref('Outstanding');

    const filters = ref({
      dateFrom: '',
      dateTo: '',
    });

    const onDetail = () => {
      model.value = true;
    };

    return {
      model,
      tab,
      filters,
      onDetail,
    };
  },
});
</script>
