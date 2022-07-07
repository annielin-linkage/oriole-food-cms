<template>
  <div class="column full-height">
    <div class="col-auto">
      <!-- Tabs -->
      <section>
        <q-tabs
          dense
          no-caps
          narrow-indicator
          keep-alive
          class="text-grey"
          active-color="grey-8"
          indicator-color="grey-8"
          :align="align"
          :breakpoint="breakpoint"
          v-model="tabActive"
        >
          <q-tab
            v-for="item in tabs"
            :key="`tab-${item}`"
            :name="item"
            class="text-subtitle2 text-weight-regular"
          >
            {{ item }}
          </q-tab>
        </q-tabs>
        <q-separator color="grey-3" />
      </section>
    </div>
    <div class="col scroll" style="overflow-y: scroll">
      <q-tab-panels v-model="tabActive" animated>
        <q-tab-panel v-for="item in tabs" :key="`tab-panel-${item}`" :name="item">
          <slot :name="`tab-${item}`" />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    tabs: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    tab: {
      type: String,
      default: '',
    },
    breakpoint: {
      type: Number,
      default: 600,
    },
    align: {
      type: String as PropType<'right' | 'left' | 'center' | 'justify'>,
      default: 'center',
    },
  },
  setup(props) {
    const tabActive = ref(props.tab);

    return { tabActive };
  },
});
</script>
