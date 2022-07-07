<template>
  <div class="column full-height">
    <div class="col-auto">
      <!-- Filters -->
      <section class="text-weight-light text-body2 q-pa-lg q-gutter-y-md">
        <div>
          <div>Create Date :</div>
          <FilterDate />
        </div>
        <div>
          <div>Category :</div>
          <FilterDate />
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
          <List @onDetail="onDetail" />
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

    const onDetail = () => {
      model.value = true;
    };

    return {
      model,
      tab,
      onDetail,
    };
  },
});
</script>
