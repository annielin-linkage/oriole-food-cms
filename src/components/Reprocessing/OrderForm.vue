<template>
  <div class="q-gutter-y-lg q-pa-lg">
    <div class="q-gutter-y-md">
      <div class="text-body2">1. Signin</div>
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
          :model-value="staff.barcode"
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

    <div class="q-gutter-y-md">
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
            :model-value="stockIn.barcode"
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
    </div>

    <div>
      <div class="text-body2">3. Start Reprocess</div>
      <template v-if="readonly">
        <q-input
          outlined
          dense
          readonly
          label="start printing"
          bg-color="grey-1"
          color="grey-8"
          style="opacity: 0.6"
          class="col q-my-md"
          :model-value="data.startReprocess"
        />
      </template>
      <template v-else>
        <q-btn
          v-if="!form.startReprocess"
          unelevated
          no-caps
          color="grey-8"
          label="Start Record"
          class="full-width text-weight-regular q-my-md"
          style="opacity: 0.6"
          @click="getTime('startReprocess')"
        />
        <q-input
          v-else
          outlined
          dense
          readonly
          label="start record"
          bg-color="grey-1"
          color="grey-8"
          style="opacity: 0.6"
          class="col q-my-md"
          :model-value="form.startReprocess"
        />
      </template>
    </div>

    <div>
      <div class="text-body2">4. Printing Labels</div>
      <template v-if="readonly">
        <q-input
          outlined
          dense
          readonly
          label="start printing"
          bg-color="grey-1"
          color="grey-8"
          style="opacity: 0.6"
          class="col q-my-md"
          :model-value="data.printingLabels"
        />
      </template>
      <template v-else>
        <q-btn
          v-if="!form.printingLabels"
          unelevated
          no-caps
          color="grey-8"
          label="Start Printing"
          class="full-width text-weight-regular q-my-md"
          style="opacity: 0.6"
          @click="getTime('printingLabels')"
        />
        <q-input
          v-else
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
      </template>
    </div>

    <div>
      <div class="text-body2">5. Stock In</div>
      <div>
        <div class="flex justify-between text-body2 text-blue-13 q-my-sm" style="opacity: 0.6">
          <i>{{ readonly ? data.stockIn.stockNo : stockInBarcodes.stockNo }}</i>
          <i>x{{ readonly ? data.stockIn.qty : stockInBarcodes.qty }}</i>
        </div>
        <div class="row">
          <q-input
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
import { uid, date } from 'quasar';

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
  },
  setup() {
    const staffBarcodes = ref([
      { id: uid(), barcode: '', qty: 1 },
      { id: uid(), barcode: '', qty: 8 },
    ]);

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

    const form = ref({
      startReprocess: '',
      printingLabels: '',
    });

    const getTime = (input: string) => {
      const dateTime = ref(date.formatDate(new Date(), 'DD/MM/YYYY HH:mm'));
      if (input === 'startReprocess') {
        form.value.startReprocess = dateTime.value;
      } else if (input === 'printingLabels') {
        form.value.printingLabels = dateTime.value;
      }
    };

    return {
      form,
      staffBarcodes,
      stockInBarcodes,
      stockOutBarcodes,
      stockIntList,
      getTime,
    };
  },
});
</script>
