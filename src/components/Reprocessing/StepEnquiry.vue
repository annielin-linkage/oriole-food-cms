<template>
  <Tabs :tabs="['Confirmed', 'Details']" :tab="tab">
    <template #tab-Confirmed>
      <Location />
    </template>
    <template #tab-Details>
      <Detail />
    </template>
  </Tabs>
  <div class="flex justify-center items-center q-pa-lg q-pb-xl bg-grey-1">
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
import Location from 'components/Reprocessing/Location.vue';
import Detail from 'components/Reprocessing/Detail.vue';

export default defineComponent({
  components: {
    Tabs,
    Location,
    Detail,
  },

  emits: ['on-cancel'],

  setup(props, context) {
    const tab = ref('Confirmed');

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
