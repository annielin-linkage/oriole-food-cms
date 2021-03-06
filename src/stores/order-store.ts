import { defineStore } from 'pinia';
import { uid } from 'quasar';

export interface IOrder {
  id: string,
  orderNo: string,
  create: string | null,
  category: string,   // category1 categor2 category3
  status: 'Outstanding' | 'Processing' | 'Enquiry', // Processing = save , Enquiry = confirmed
  signin: Array<{ id: string, barcode: string | null }>,
  stockOut: Array<{ id: string, stockNo: string, qty: number, barcode: string, description: string }>,
  startReprocess: string, // DateTime
  startReprocess2: string, // DateTime
  printingLabels: string, // DateTime
  stockIn: { id: string, stockNo: string, qty: number, barcode: '', description: string, },
  stockInList: Array<{ id: string, sku: string, weight: number, barcode: string | null }>,
  labour: number,
  time: number | null, // 單位分鐘
  delivery: {
    status: 'Outstanding' | 'Enquiry', // Outstanding : order.status = Enquiry , Enquiry = completed
    name: string,
    contact: string,
    address: string,
    deliveriedTime: string | null,
    handledBy: string | null,
    deliveryNo: string,
  }
}

export interface IDelivery {
  id: string,
  status: 'Outstanding' | 'Enquiry',
  create: string | null,
  name: string,
  contact: string,
  address: string,
  deliveriedTime: string | null,
  handledBy: string | null,
  orderNo: string,
  source: Array<{ id: string, stockNo: string, qty: number, barcode: string | null, description: string }>,
  resourcess: { id: string, stockNo: string, qty: number, barcode: string | null, description: string },
}

export const InitialOrderState = (): { order: IOrder[], delivery: IDelivery[] } => ({
  order: [

    // Outstanding
    {
      id: uid(),
      orderNo: 'RPF2206220005',
      create: '07/05/2022 15:33',
      category: 'category1',  // category1 categor2 category3
      status: 'Outstanding', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '', // DateTime
      startReprocess2: '', // DateTime
      printingLabels: '', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585741', weight: 250, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: 252, barcode: 'Z0002' },
        { id: uid(), sku: '0378585743', weight: 251, barcode: 'Z0003' },
        { id: uid(), sku: '0378585744', weight: 255, barcode: 'Z0004' },
      ],
      labour: 1,
      time: 20, // 單位分鐘
      delivery: {
        status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
        name: 'Big Big Cafe',
        contact: '96667766',
        address: '新界元朗大馬路100 號',
        deliveriedTime: '',
        handledBy: '',
        deliveryNo: 'DN2206220001',
      }
    },
    {
      id: uid(),
      orderNo: 'RPF2206220004',
      create: '07/04/2022 12:02',
      category: 'category1',  // category1 categor2 category3
      status: 'Outstanding', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '', // DateTime
      startReprocess2: '', // DateTime
      printingLabels: '', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585741', weight: 250, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: 252, barcode: 'Z0002' },
        { id: uid(), sku: '0378585743', weight: 251, barcode: 'Z0003' },
        { id: uid(), sku: '0378585744', weight: 255, barcode: 'Z0004' },
      ],
      labour: 1,
      time: 20, // 單位分鐘
      delivery: {
        status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
        name: 'Big Big Cafe',
        contact: '96667766',
        address: '新界元朗大馬路100 號',
        deliveriedTime: '',
        handledBy: '',
        deliveryNo: 'DN2206220001',
      }
    },
    {
      id: uid(),
      orderNo: 'RPF2206220003',
      create: '07/04/2022 09:17',
      category: 'category1',  // category1 categor2 category3
      status: 'Outstanding', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '', // DateTime
      startReprocess2: '', // DateTime
      printingLabels: '', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585741', weight: 250, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: 252, barcode: 'Z0002' },
        { id: uid(), sku: '0378585743', weight: 251, barcode: 'Z0003' },
        { id: uid(), sku: '0378585744', weight: 255, barcode: 'Z0004' },
      ],
      labour: 1,
      time: 20, // 單位分鐘
      delivery: {
        status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
        name: 'Big Big Cafe',
        contact: '96667766',
        address: '新界元朗大馬路100 號',
        deliveriedTime: '',
        handledBy: '',
        deliveryNo: 'DN2206220001',
      }
    },
    {
      id: uid(),
      orderNo: 'RPF2206220002',
      create: '07/03/2022 15:33',
      category: 'category1',  // category1 categor2 category3
      status: 'Outstanding', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '', // DateTime
      startReprocess2: '', // DateTime
      printingLabels: '', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585741', weight: 250, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: 252, barcode: 'Z0002' },
        { id: uid(), sku: '0378585743', weight: 251, barcode: 'Z0003' },
        { id: uid(), sku: '0378585744', weight: 255, barcode: 'Z0004' },
      ],
      labour: 1,
      time: 20, // 單位分鐘
      delivery: {
        status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
        name: 'Big Big Cafe',
        contact: '96667766',
        address: '新界元朗大馬路100 號',
        deliveriedTime: '',
        handledBy: '',
        deliveryNo: 'DN2206220001',
      }
    },
    {
      id: uid(),
      orderNo: 'RPF2206220001',
      create: '07/03/2022 14:17',
      category: 'category1',  // category1 categor2 category3
      status: 'Outstanding', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '', // DateTime
      startReprocess2: '', // DateTime
      printingLabels: '', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585741', weight: 250, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: 252, barcode: 'Z0002' },
        { id: uid(), sku: '0378585743', weight: 251, barcode: 'Z0003' },
        { id: uid(), sku: '0378585744', weight: 255, barcode: 'Z0004' },
      ],
      labour: 1,
      time: 20, // 單位分鐘
      delivery: {
        status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
        name: 'Big Big Cafe',
        contact: '96667766',
        address: '新界元朗大馬路100 號',
        deliveriedTime: '',
        handledBy: '',
        deliveryNo: 'DN2206220001',
      }
    },
    {
      id: uid(),
      orderNo: 'RPF2206220000',
      create: '07/02/2022 10:13',
      category: 'category1',  // category1 categor2 category3
      status: 'Outstanding', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '', // DateTime
      startReprocess2: '', // DateTime
      printingLabels: '', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585741', weight: 250, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: 252, barcode: 'Z0002' },
        { id: uid(), sku: '0378585743', weight: 251, barcode: 'Z0003' },
        { id: uid(), sku: '0378585744', weight: 255, barcode: 'Z0004' },
      ],
      labour: 1,
      time: 20, // 單位分鐘
      delivery: {
        status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
        name: 'Big Big Cafe',
        contact: '96667766',
        address: '新界元朗大馬路100 號',
        deliveriedTime: '',
        handledBy: '',
        deliveryNo: 'DN2206220001',
      }
    },
  ],
  delivery: [
    {
      id: uid(),
      create: '07/05/2022 15:33',
      status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '22/06/2022 11:04:00 AM',
      handledBy: '0377 (John Chan)',
      orderNo: 'DN2206220001',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
    {
      id: uid(),
      create: '07/04/2022 12:02',
      status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '22/06/2022 11:04:00 AM',
      handledBy: '0377 (John Chan)',
      orderNo: 'DN2206220000',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
    {
      id: uid(),
      create: '07/04/2022 19:17',
      status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '22/06/2022 11:04:00 AM',
      handledBy: '0377 (John Chan)',
      orderNo: 'DN2106220005',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
    {
      id: uid(),
      create: '07/04/2022 15:33',
      status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '22/06/2022 11:04:00 AM',
      handledBy: '0377 (John Chan)',
      orderNo: 'DN2106220004',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
    {
      id: uid(),
      create: '07/03/2022 14:17',
      status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '22/06/2022 11:04:00 AM',
      handledBy: '0377 (John Chan)',
      orderNo: 'DN2106220003',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
    {
      id: uid(),
      create: '07/02/2022 10:13',
      status: 'Outstanding', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '22/06/2022 11:04:00 AM',
      handledBy: '0377 (John Chan)',
      orderNo: 'DN2106220002',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
  ]
})

export const useOrderStore = defineStore('order', {
  state: () => InitialOrderState(),
  getters: {
    findOutstanding: state => state.order.filter(s => s.status === 'Outstanding'),
    findProcessing: state => state.order.filter(s => s.status === 'Processing'),
    findEnquiry: state => state.order.filter(s => s.status === 'Enquiry'),
    findDeliveryOutstanding: state => state.delivery.filter(s => s.status === 'Outstanding'),
    findDeliveryEnquiry: state => state.delivery.filter(s => s.status === 'Enquiry'),
  },
  actions: {
    orderSave(id: string, payload: { startReprocess: string, startReprocess2: string, printingLabels: string, status: 'Outstanding' | 'Processing' | 'Enquiry' }) {
      const order = this.order.find(o => o.id === id)
      if (order) {
        order.startReprocess = payload.startReprocess;
        order.startReprocess2 = payload.startReprocess2;
        order.printingLabels = payload.printingLabels;
        order.status = payload.status;
        console.log('orderSave', id, order);
      }
    },
    deliveryCompleted(id: string) {
      const delivery = this.delivery.find(o => o.id === id)
      if (delivery) {
        delivery.status = 'Enquiry';
        console.log('deliveryCompleted', id);
      }
    },
  },
});
