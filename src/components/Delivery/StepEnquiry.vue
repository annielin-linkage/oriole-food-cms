<template>
  <Tabs :tabs="['Location', 'Details']" :tab="tab">
    <template #tab-Location>
      <Location />
    </template>
    <template #tab-Details>
      <Detail />
    </template>
  </Tabs>
  <div class="flex justify-center items-center">
    <q-btn
      no-caps
      unelevated
      rounded
      size="md"
      color="grey-6"
      class="text-caption"
      style="width: 50%"
      label="Back to list"
      @click="onCancel()"
    />
  </div>
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

  emits: ['on-cancel'],

  setup(props, context) {
    const tab = ref('Location');

    const onCancel = () => {
      context.emit('on-cancel');
    };

    return {
      tab,
      onCancel,
    };
  },
});
</script>
