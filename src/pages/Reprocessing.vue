<template>
  <div class="column full-height">
    <div class="col-auto">
      <!-- Filters -->
      <section class="text-weight-light text-body2 q-pa-lg q-gutter-y-md">
        <div>
          <div>Create Date :</div>
          <FilterDate :rules="[]" v-model="filters.date" />
        </div>
        <div>
          <div>Category :</div>
          <q-select
            clearable
            filled
            dense
            color="grey-8"
            v-model="filters.category"
            :options="['Category1', 'Category2', 'Category3']"
          />
        </div>
      </section>
    </div>
    <div class="col">
      <!-- Tabs -->
      <Tabs
        :tabs="['Outstanding', 'Processing', 'Enquiry']"
        :tab="tab"
        :breakpoint="0"
        :align="'left'"
      >
        <!-- Outstanding -->
        <template #tab-Outstanding>
          <List @onDetail="onDetail" />
        </template>
        <!-- Processing -->
        <template #tab-Processing>
          <List @onDetail="onDetail" />
        </template>
        <!-- Enquiry -->
        <template #tab-Enquiry>
          <List @onDetail="onDetail" icon="search" />
        </template>
      </Tabs>
    </div>
  </div>

  <!-- Detail Page -->
  <ReprocessingDetail v-model="model" :headerClass="'bg-yellow-8'" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import FilterDate from 'components/Input/FilterDate.vue';
import Tabs from 'components/Tabs.vue';
import List from 'components/List.vue';
import ReprocessingDetail from 'partials/ReprocessingDetail.vue';

export default defineComponent({
  name: 'Reprocessing',

  components: {
    FilterDate,
    Tabs,
    List,
    ReprocessingDetail,
  },

  setup() {
    const model = ref(false);
    const tab = ref('Outstanding');

    const filters = ref({
      date: '',
      category: '',
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
