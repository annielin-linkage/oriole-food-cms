<template>
  <Tabs :tabs="['Process', 'Details']" :tab="tab">
    <template #tab-Process>
      <Location />
    </template>
    <template #tab-Details>
      <Detail />
    </template>
  </Tabs>

  <div class="row q-col-gutter-x-md q-pa-lg q-pb-xl bg-grey-1">
    <div class="col-7">
      <q-btn
        no-caps
        unelevated
        rounded
        size="md"
        color="yellow-8"
        class="text-caption full-width"
        label="Submit"
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
        @click="onSave()"
      />
    </div>
  </div>
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

  emits: ['on-next', 'on-save'],

  setup(props, context) {
    const tab = ref('Process');

    const onNext = () => {
      context.emit('on-next');
    };

    const onSave = () => {
      context.emit('on-save');
    };

    return {
      tab,
      onNext,
      onSave,
    };
  },
});
</script>
