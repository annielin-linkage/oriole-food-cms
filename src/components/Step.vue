<template>
  <!-- Step -->
  <section
    class="flex bg-grey-1 text-grey-8 text-italic text-subtitle2 text-weight-regular q-pa-lg justify-center items-center"
    style="height: 75px"
  >
    <div
      v-for="item in value"
      :key="`step-${item}`"
      class="flex items-center q-gutter-x-xs q-pa-sm"
      :style="{ opacity: step === item ? '1' : '0.4' }"
    >
      <div class="dot" :class="step != item && 'invisible'"></div>
      <div>{{ item }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeliveryDetailStep',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    step: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.dot {
  width: 7px;
  height: 7px;
  border-radius: 5px;
  background-color: $yellow-8;
}
</style>
