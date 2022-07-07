<template>
  <Tabs :tabs="['Process', 'Details']" :tab="tab">
    <template #tab-Process>
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
import Location from 'components/Reprocessing/Location.vue';
import Detail from 'components/Reprocessing/Detail.vue';

export default defineComponent({
  name: 'StepOutstanding',

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
