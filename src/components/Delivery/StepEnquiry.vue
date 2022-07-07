<template>
  <Tabs :tabs="['Location', 'Details']" :tab="tab">
    <template #tab-Location>
      <Location />
    </template>
    <template #tab-Details>
      <Detail />
    </template>
  </Tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Tabs from 'components/Tabs.vue';
import Location from 'components/Delivery/Location.vue';
import Detail from 'components/Delivery/Detail.vue';

export default defineComponent({
  name: 'StepEnquiry',

  components: {
    Tabs,
    Location,
    Detail,
  },

  setup() {
    const tab = ref('Location');

    return {
      tab,
    };
  },
});
</script>
