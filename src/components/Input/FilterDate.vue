<template>
  <q-input
    ref="refEl"
    dense
    mask="date"
    :color="color"
    :bg-color="bgColor"
    :label-color="labelColor"
    :filled="filled"
    :disable="disable"
    :readonly="readonly"
    :rules="rulesData"
    :clearable="clearable"
    @change="handleChange"
    @clear="handleClear"
    v-model="model"
  >
    <template #append>
      <q-icon class="cursor-pointer" :name="icon">
        <q-popup-proxy
          ref="datePickProxy"
          :transition-show="transition"
          :transition-hide="transition"
        >
          <q-date
            :color="color"
            :title="parseTitle(model)"
            :subtitle="parseSubTitle(model)"
            :options="optionsVal"
            :mask="mask"
            @input="handleInput"
            @update:model-value="handleInput"
            v-model="model"
          />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref, computed, toRef } from 'vue';
import { QInput, QIcon, QPopupProxy, QDate, date } from 'quasar';

import { useModelWrapper } from 'utils/hooks';

export default defineComponent({
  name: 'FiterDate',
  components: { QInput, QIcon, QPopupProxy, QDate },
  props: {
    modelValue: {
      type: [Number, String, Date],
    },
    color: {
      type: String,
      default: 'grey-8',
    },
    bgColor: {
      type: String,
      default: '',
    },
    labelColor: {
      type: String,
      default: 'grey-8',
    },
    filled: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [(val: any) => !!val],
    },
    mask: {
      type: String,
      default: 'YYYY/MM/DD',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: 'event',
    },
    transition: {
      type: String,
      default: 'scale',
    },
    autoHide: {
      type: Boolean,
      default: true,
    },
    formatTitle: {
      type: String,
      default: 'ddd, MMM DD',
    },
    formatSubTitle: {
      type: String,
      default: 'YYYY',
    },
    options: {},
  },
  setup(props, context) {
    const refEl = ref();
    const datePickProxy = ref();
    const optionsVal: any = toRef(props, 'options');
    const model = ref(useModelWrapper(props, context.emit, 'modelValue'));
    const rulesData: any = computed(() => (props.required ? props.rules : []));
    const hasError = computed(() => refEl.value?.hasError ?? false);

    return {
      refEl,
      datePickProxy,
      optionsVal,
      model,
      rulesData,
      hasError,
      handleChange(newVal: any) {
        context.emit('update:modelValue', newVal);
      },
      handleInput(newVal: any) {
        context.emit('update:modelValue', newVal);
        if (props.autoHide) datePickProxy.value?.hide();
      },
      handleClear() {
        context.emit('update:modelValue', null);
      },
      parseTitle(value: any) {
        return value ? date.formatDate(value, props.formatTitle) : ' ';
      },
      parseSubTitle(value: any) {
        return value ? date.formatDate(value, props.formatSubTitle) : ' ';
      },
      validate() {
        return refEl.value?.validate();
      },
    };
  },
});
</script>
