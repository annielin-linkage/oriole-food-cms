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
  printingLabels: string, // DateTime
  stockIn: { id: string, stockNo: string, qty: number, barcode: '', description: string, },
  stockInList: Array<{ id: string, sku: string, weight: string, qty: number, barcode: string | null }>,
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
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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


    // Processing
    {
      id: uid(),
      orderNo: 'RPF2206220005',
      create: '07/05/2022 15:33',
      category: 'category1',  // category1 categor2 category3
      status: 'Processing', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Processing', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Processing', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Processing', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Processing', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Processing', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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

    // Enquiry
    {
      id: uid(),
      orderNo: 'RPF2206220005',
      create: '07/05/2022 15:33',
      category: 'category1',  // category1 categor2 category3
      status: 'Enquiry', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Enquiry', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Enquiry', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Enquiry', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Enquiry', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      status: 'Enquiry', // Processing = save , Enquiry = confirmed
      signin: [
        { id: uid(), barcode: '0342 - Albert Chan', },
        { id: uid(), barcode: '0386 - Man Cheung', },
      ],
      stockOut: [ // 訂單輸入的原物料內容
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '0397668576', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'PL01234', qty: 8, barcode: '0087655445', description: '10" 真空膠袋' },
      ],
      startReprocess: '06/07/2022 11:15:21 AM', // DateTime
      printingLabels: '06/07/2022 11:35:21 AM', // DateTime
      stockIn: { id: uid(), stockNo: 'ZZBR026', qty: 8, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB)西冷 250g' },
      stockInList: [
        { id: uid(), sku: '0378585742', weight: '250g', qty: 2, barcode: 'Z0001', },
        { id: uid(), sku: '0378585742', weight: '252g', qty: 4, barcode: 'Z0002' },
        { id: uid(), sku: '0378585742', weight: '248g', qty: 2, barcode: 'Z0003' },
      ],
      labour: 2,
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
      deliveriedTime: '-',
      handledBy: '-',
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
      deliveriedTime: '-',
      handledBy: '-',
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
      deliveriedTime: '-',
      handledBy: '-',
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
      deliveriedTime: '-',
      handledBy: '-',
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
      deliveriedTime: '-',
      handledBy: '-',
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
      deliveriedTime: '-',
      handledBy: '-',
      orderNo: 'DN2106220002',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
    {
      id: uid(),
      create: '07/07/2022 12:18',
      status: 'Enquiry', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '-',
      handledBy: '-',
      orderNo: 'DN2206220006',
      source: [
        { id: uid(), stockNo: 'ZZBU018', qty: 1, barcode: '', description: '冰鮮美國極佳級安格斯(Prime CAB) 西冷2公斤' },
        { id: uid(), stockNo: 'CTMW03', qty: 20, barcode: '', description: '急凍泰國雞中翼(業務裝)1公斤裝' },
      ],
      resourcess: { id: uid(), stockNo: 'ZPPBS001', qty: 8, barcode: '', description: '奇妙牌急凍美國日式豬梅頭火鍋切片300克' },
    },
    {
      id: uid(),
      create: '07/08/2022 15:16',
      status: 'Enquiry', // Outstanding : order.status = Enquiry , Enquiry = completed
      name: 'Big Big Cafe',
      contact: '9666 7766',
      address: '新界元朗大馬路 100 號',
      deliveriedTime: '-',
      handledBy: '-',
      orderNo: 'DN2206220007',
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

  },
});
