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
          <List />
        </template>
        <!-- Processing -->
        <template #tab-Processing>
          <List />
        </template>
        <!-- Enquiry -->
        <template #tab-Enquiry>
          <List />
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import FilterDate from 'components/Input/FilterDate.vue';
import Tabs from 'components/Tabs.vue';
import List from 'components/List.vue';

export default defineComponent({
  name: 'Reprocessing',

  components: {
    FilterDate,
    Tabs,
    List,
  },

  setup() {
    const tab = ref('Outstanding');

    return {
      tab,
    };
  },
});
</script>
