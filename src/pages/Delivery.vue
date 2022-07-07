<template>
  <div class="column full-height">
    <div class="col-auto">
      <!-- Filters -->
      <section class="text-weight-light text-body2 q-pa-lg q-gutter-y-md">
        <div>
          <div>From :</div>
          <FilterDate />
        </div>
        <div>
          <div>To :</div>
          <FilterDate />
        </div>
      </section>

      <!-- Tabs -->
      <!-- <section>
        <q-tabs
          dense
          no-caps
          narrow-indicator
          keep-alive
          class="text-grey"
          active-color="grey-8"
          indicator-color="grey-8"
          align="left"
          :breakpoint="0"
          v-model="tab"
        >
          <q-tab name="outstanding" class="text-caption text-weight-regular"> Outstanding </q-tab>
          <q-tab name="enquiry" class="text-caption text-weight-regular">Enquiry</q-tab>
        </q-tabs>
        <q-separator color="grey-3" />
      </section> -->
    </div>
    <div class="col">
      <Tabs :tabs="['Outstanding', 'Enquiry']" :tab="tab">
        <template #tab-Outstanding> <List /></template>
        <template #tab-Enquiry> <List /></template>
      </Tabs>
    </div>
    <!-- <div class="col scroll" style="overflow-y: scroll">
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="outstanding">
          <List />
        </q-tab-panel>

        <q-tab-panel name="enquiry">
          <List />
        </q-tab-panel>
      </q-tab-panels>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import FilterDate from 'components/Input/FilterDate.vue';
import Tabs from 'components/Tabs.vue';
import List from 'components/Delivery/List.vue';

export default defineComponent({
  name: 'Delivery',

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
