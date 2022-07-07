<template>
  <div class="q-gutter-y-lg q-pa-lg">
    <div class="q-gutter-y-md">
      <div class="text-body2">1. Signin</div>
      <div v-for="staff in staffBarcodes" :key="staff.id" class="row q-gutter-x-sm">
        <q-input
          outlined
          dense
          label="staff barcode"
          bg-color="grey-1"
          color="grey-8"
          style="opacity: 0.6"
          :class="readonly && 'col'"
          :readonly="readonly"
          :model-value="staff.barcode"
        />
        <q-btn
          v-if="!readonly"
          unelevated
          no-caps
          color="grey-8"
          label="Scan"
          class="text-weight-regular col"
          style="opacity: 0.6"
        />
      </div>
    </div>

    <div class="q-gutter-y-md">
      <div class="text-body2">2. Stock Out</div>
      <div v-for="stockIn in stockInBarcodes" :key="stockIn.id">
        <div class="flex justify-between text-body2 text-blue-13 q-my-sm" style="opacity: 0.6">
          <i>{{ stockIn.name }}</i>
          <i>x{{ stockIn.qty }}</i>
        </div>
        <div class="row q-gutter-x-sm">
          <q-input
            outlined
            dense
            label="staff barcode"
            bg-color="grey-1"
            color="grey-8"
            style="opacity: 0.6"
            :class="readonly && 'col'"
            :readonly="readonly"
            :model-value="stockIn.barcode"
          />
          <q-btn
            v-if="!readonly"
            unelevated
            no-caps
            color="grey-8"
            label="Scan"
            class="text-weight-regular col"
            style="opacity: 0.6"
          />
        </div>
      </div>
    </div>

    <div>
      <div class="text-body2">3. Start Reprocess</div>
      <q-btn
        unelevated
        no-caps
        color="grey-8"
        label="Start Record"
        class="full-width text-weight-regular q-my-md"
        style="opacity: 0.6"
      />
    </div>

    <div>
      <div class="text-body2">4. Printing Labels</div>
      <q-btn
        unelevated
        no-caps
        color="grey-8"
        label="Start Printing"
        class="full-width text-weight-regular q-my-md"
        style="opacity: 0.6"
      />
    </div>

    <div>
      <div class="text-body2">5. Stock In</div>
      <div v-for="stockOut in stockInBarcodes" :key="stockOut.id">
        <div class="flex justify-between text-body2 text-blue-13 q-my-sm" style="opacity: 0.6">
          <i>{{ stockOut.name }}</i>
          <i>x{{ stockOut.qty }}</i>
        </div>
        <div class="row q-gutter-x-sm">
          <q-input
            outlined
            dense
            label="Generate Barcode"
            bg-color="grey-1"
            color="grey-8"
            style="opacity: 0.6"
            :class="readonly && 'col'"
            :readonly="readonly"
            :model-value="stockOut.barcode"
          />
          <q-btn
            v-if="!readonly"
            unelevated
            no-caps
            color="grey-8"
            label="Scan"
            class="text-weight-regular col"
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
          <tr v-for="stockInItem in stockIntList" :key="stockInItem.id">
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
import { defineComponent, ref } from 'vue';
import { uid } from 'quasar';

export default defineComponent({
  name: 'OrderForm',
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const staffBarcodes = ref([
      { id: uid(), barcode: '', qty: 1 },
      { id: uid(), barcode: '', qty: 8 },
    ]);

    const stockInBarcodes = ref([{ id: uid(), name: 'ZZBU018', barcode: '', qty: 8 }]);

    const stockOutBarcodes = ref([{ id: uid(), name: 'ZZBU018', barcode: '' }]);

    const stockIntList = ref([
      { id: uid(), sku: '0378585742', weight: '250g', qty: 2 },
      { id: uid(), sku: '0378585742', weight: '252g', qty: 4 },
      { id: uid(), sku: '0378585742', weight: '248g', qty: 2 },
    ]);

    return {
      staffBarcodes,
      stockInBarcodes,
      stockOutBarcodes,
      stockIntList,
    };
  },
});
</script>
