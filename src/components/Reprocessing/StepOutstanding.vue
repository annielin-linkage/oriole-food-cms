<template>
  <div>Outstanding</div>
  <div class="flex justify-center items-center">
    <q-btn
      no-caps
      unelevated
      rounded
      size="md"
      color="yellow-8"
      class="text-caption"
      style="width: 50%"
      label="Start Reprocess"
      @click="onNext()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['on-next'],

  setup(props, context) {
    const onNext = () => {
      context.emit('on-next');
    };

    return {
      onNext,
    };
  },
});
</script>
