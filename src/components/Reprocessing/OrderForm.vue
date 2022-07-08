<template>
  <div class="q-gutter-y-lg q-pa-lg">
    <div class="q-gutter-y-md">
      <div class="text-body2">1. Worker's ID</div>
      <div v-for="staff in readonly ? data.signin : staffBarcodes" :key="staff.id" class="row">
        <q-input
          outlined
          dense
          label="staff barcode"
          bg-color="grey-1"
          color="grey-8"
          style="opacity: 0.6"
          :class="readonly ? 'col-12' : 'col-8'"
          :readonly="readonly"
          v-model="staff.barcode"
        />
        <q-btn
          v-if="!readonly"
          unelevated
          no-caps
          color="grey-8"
          label="Scan"
          class="text-weight-regular col-4"
          style="opacity: 0.6"
        />
      </div>
    </div>

    <!-- <div class="q-gutter-y-md">
      <div class="text-body2">2. Stock Out</div>
      <div v-for="stockIn in readonly ? data.stockOut : stockOutBarcodes" :key="stockIn.id">
        <div class="flex justify-between text-body2 text-blue-13 q-my-sm" style="opacity: 0.6">
          <i>{{ stockIn.stockNo }}</i>
          <i>x{{ stockIn.qty }}</i>
        </div>
        <div class="row">
          <q-input
            outlined
            dense
            label="staff barcode"
            bg-color="grey-1"
            color="grey-8"
            style="opacity: 0.6"
            :class="readonly ? 'col-12' : 'col-8'"
            :readonly="readonly"
            v-model="stockIn.barcode"
          />
          <q-btn
            v-if="!readonly"
            unelevated
            no-caps
            color="grey-8"
            label="Scan"
            class="text-weight-regular col-4"
            style="opacity: 0.6"
          />
        </div>
      </div>
    </div> -->

    <div>
      <div class="flex justify-between text-body2">
        <div>2. Start Reprocess</div>
        <div v-if="!!data.startReprocess">Step 2</div>
        <div v-else>Step 1</div>
      </div>

      <q-btn
        v-if="form.startReprocess.length === 0 && form.startReprocess2.length === 0 && !readonly"
        unelevated
        no-caps
        color="grey-8"
        label="Start Record 1"
        class="full-width text-weight-regular q-my-md"
        style="opacity: 0.6"
        @click="$emit('on-startreprocess')"
      />
      <q-btn
        v-if="data.startReprocess.length !== 0 && form.startReprocess2.length === 0 && !readonly"
        unelevated
        no-caps
        color="grey-8"
        label="Start Record 2"
        class="full-width text-weight-regular q-my-md"
        style="opacity: 0.6"
        @click="$emit('on-startreprocess2')"
      />
      <q-input
        v-if="
          (form.startReprocess.length !== 0 &&
            data.startReprocess2.length === 0 &&
            data.startReprocess.length === 0) ||
          readonly
        "
        outlined
        dense
        readonly
        label="start record 1"
        bg-color="grey-1"
        color="grey-8"
        style="opacity: 0.6"
        class="col q-my-md"
        :model-value="form.startReprocess"
      />
      <q-input
        v-if="(form.startReprocess2.length !== 0 && data.startReprocess2.length === 0) || readonly"
        outlined
        dense
        readonly
        label="start record 2"
        bg-color="grey-1"
        color="grey-8"
        style="opacity: 0.6"
        class="col q-my-md"
        :model-value="form.startReprocess2"
      />
    </div>

    <div>
      <div class="text-body2">3. Printing Labels</div>
      <q-btn
        v-if="form.printingLabels.length === 0 && !readonly"
        unelevated
        no-caps
        color="grey-8"
        label="Start Printing"
        class="full-width text-weight-regular q-my-md"
        style="opacity: 0.6"
        @click="$emit('on-printingLabels')"
      />
      <q-input
        v-if="(form.printingLabels.length !== 0 && data.printingLabels.length === 0) || readonly"
        outlined
        dense
        readonly
        label="start printing"
        bg-color="grey-1"
        color="grey-8"
        style="opacity: 0.6"
        class="col q-my-md"
        :model-value="form.printingLabels"
      />
    </div>

    <div>
      <div class="text-body2">4. Stock In</div>
      <div>
        <div class="flex justify-between text-body2 text-blue-13 q-my-sm" style="opacity: 0.6">
          <i>{{ readonly ? data.stockIn.stockNo : stockInBarcodes.stockNo }}</i>
          <i>x{{ readonly ? data.stockIn.qty : stockInBarcodes.qty }}</i>
        </div>
        <div class="row">
          <q-input
            v-if="readonly"
            outlined
            dense
            label="Generate Barcode"
            bg-color="grey-1"
            color="grey-8"
            style="opacity: 0.6"
            :class="readonly ? 'col-12' : 'col-8'"
            :readonly="readonly"
            :model-value="data.stockIn.barcode"
          />
          <q-input
            v-else
            outlined
            dense
            label="Generate Barcode"
            bg-color="grey-1"
            color="grey-8"
            style="opacity: 0.6"
            :class="readonly ? 'col-12' : 'col-8'"
            :readonly="readonly"
            v-model="barcode"
          />
          <q-btn
            v-if="!readonly"
            unelevated
            no-caps
            color="grey-8"
            label="Scan"
            class="text-weight-regular col-4"
            style="opacity: 0.6"
          />
        </div>
      </div>

      <table class="fit q-mt-md">
        <thead>
          <tr>
            <th class="text-weight-regular text-body2 text-grey-8 text-left">SKU</th>
            <th class="text-weight-regular text-body2 text-grey-8">Weight</th>
            <th class="text-weight-regular text-body2 text-grey-8 text-right">Qty</th>
          </tr>
        </thead>
        <!-- TODO: dispatch data -->
        <tbody v-if="readonly">
          <tr v-for="stockInItem in data.stockInList" :key="stockInItem.id">
            <td>{{ stockInItem.sku }}</td>
            <td class="text-weight-regular text-body2 text-grey-8 text-center">
              {{ stockInItem.weight }}
            </td>
            <td class="text-weight-regular text-body2 text-grey-8 text-right">
              {{ stockInItem.qty }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { uid } from 'quasar';

import { IOrder } from 'src/stores/order-store';

export default defineComponent({
  name: 'OrderForm',
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object as PropType<IOrder>,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
  },
  emits: ['on-startreprocess', 'on-startreprocess2', 'on-printingLabels'],
  setup() {
    const staffBarcodes = ref([{ id: uid(), barcode: '' }]);

    const stockOutBarcodes = ref([
      { id: uid(), stockNo: 'ZZBU018', barcode: '', qty: 1 },
      { id: uid(), stockNo: 'PL01234', barcode: '', qty: 8 },
    ]);

    const stockInBarcodes = ref({ id: uid(), stockNo: 'ZZBU018', barcode: '', qty: 8 });

    const stockIntList = ref([
      { id: uid(), sku: '0378585742', weight: '250g', qty: 2 },
      { id: uid(), sku: '0378585742', weight: '252g', qty: 4 },
      { id: uid(), sku: '0378585742', weight: '248g', qty: 2 },
    ]);

    const barcode = ref();

    return {
      barcode,
      staffBarcodes,
      stockInBarcodes,
      stockOutBarcodes,
      stockIntList,
    };
  },
});
</script>
