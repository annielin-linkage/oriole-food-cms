<template>
  <Tabs :tabs="['Location', 'Details']" :tab="tab">
    <template #tab-Location>
      <Location />
    </template>
    <template #tab-Details>
      <Detail />
    </template>
  </Tabs>
  <div class="row q-pa-lg q-col-gutter-x-md">
    <div class="col-7">
      <q-btn
        no-caps
        unelevated
        rounded
        size="md"
        color="blue-4"
        class="text-caption full-width"
        label="Completed"
        @click="onNext()"
      />
    </div>
    <div class="col-5">
      <q-btn
        no-caps
        unelevated
        rounded
        size="md"
        color="grey-3"
        class="text-caption full-width"
        label="Cancel"
        @click="onCancel()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Tabs from 'components/Tabs.vue';
import Location from 'components/Delivery/Location.vue';
import Detail from 'components/Delivery/Detail.vue';

export default defineComponent({
  name: 'StepOutstanding',

  components: {
    Tabs,
    Location,
    Detail,
  },

  emits: ['on-next', 'on-cancel'],

  setup(props, context) {
    const tab = ref('Location');

    const onNext = () => {
      context.emit('on-next');
    };

    const onCancel = () => {
      context.emit('on-cancel');
    };

    return {
      tab,
      onNext,
      onCancel,
    };
  },
});
</script>
