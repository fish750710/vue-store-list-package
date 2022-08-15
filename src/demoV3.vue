<template>
<div>
  <VueReStoreList
    :storeData="state.storeData"
    :filterData="state.filterData"
    :locale="state.locale"
    @searchStores="searchStores"
    @getOption="getOption"
  />
</div>
</template>

<script setup>
import { reactive } from '@vue/reactivity';
import VueReStoreList from './VueReStoreList.vue';

const storeDemoData = {
  items: [
    {
      reStoreInfo: {
        id: '0c78c1c0-234b-11e8-98fd-dfff2af8a5fd',
        name: '細節塗層',
        address: '中山路三段120號之1',
        city: '花蓮縣',
        region: '吉安鄉',
        shortId: 'SWR6781',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/05-%E5%85%B6%E4%BB%96/SP/34-%E6%B1%BD%E8%BB%8A%E7%83%A4%E6%BC%86%E9%8D%8D%E8%86%9C/01.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/05-%E5%85%B6%E4%BB%96/SP/34-%E6%B1%BD%E8%BB%8A%E7%83%A4%E6%BC%86%E9%8D%8D%E8%86%9C/01.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/05-%E5%85%B6%E4%BB%96/SP/34-%E6%B1%BD%E8%BB%8A%E7%83%A4%E6%BC%86%E9%8D%8D%E8%86%9C/01.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/05-%E5%85%B6%E4%BB%96/SP/34-%E6%B1%BD%E8%BB%8A%E7%83%A4%E6%BC%86%E9%8D%8D%E8%86%9C/01.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/05-%E5%85%B6%E4%BB%96/SP/34-%E6%B1%BD%E8%BB%8A%E7%83%A4%E6%BC%86%E9%8D%8D%E8%86%9C/01.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: '1b846e00-88a3-11e7-a77c-d33fd15e8208',
        name: '阿爾伊大雞排',
        address: '江南街65巷51號1樓',
        city: '臺北市',
        region: '內湖區',
        shortId: 'ZTK9711',
        branchName: '港墘店',
        imgUrlXl:
          'https://storage.googleapis.com/myre-stage/store/1b846e00-88a3-11e7-a77c-d33fd15e8208/img/list/BDLMUUc7-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre-stage/store/1b846e00-88a3-11e7-a77c-d33fd15e8208/img/list/BDLMUUc7-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre-stage/store/1b846e00-88a3-11e7-a77c-d33fd15e8208/img/list/BDLMUUc7-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre-stage/store/1b846e00-88a3-11e7-a77c-d33fd15e8208/img/list/BDLMUUc7-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre-stage/store/1b846e00-88a3-11e7-a77c-d33fd15e8208/img/list/BDLMUUc7-xs.jpg',
        isQuickReceiveEnabled: true,
        quickReceiveLimitLevel: -1,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 500,
        avgCostEnd: 500,
        isAvgCostEnabled: true,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: '3f0767b0-27f9-11e8-900b-5f0dff362746',
        name: '俏妃衛生棉專賣店',
        address: '中正路331之1號',
        city: '桃園市',
        region: '龍潭區',
        shortId: 'ZRP9971',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/3f0767b0-27f9-11e8-900b-5f0dff362746/img/list/S1dKfD2qM-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/3f0767b0-27f9-11e8-900b-5f0dff362746/img/list/S1dKfD2qM-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/3f0767b0-27f9-11e8-900b-5f0dff362746/img/list/S1dKfD2qM-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/3f0767b0-27f9-11e8-900b-5f0dff362746/img/list/S1dKfD2qM-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/3f0767b0-27f9-11e8-900b-5f0dff362746/img/list/S1dKfD2qM-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: '470e73c0-f5d8-11e7-aabb-651a34233045',
        name: '成發藥局',
        address: '和平路250號',
        city: '桃園市',
        region: '八德區',
        shortId: 'UXT4928',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/470e73c0-f5d8-11e7-aabb-651a34233045/img/list/S1O4QEuIG-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/470e73c0-f5d8-11e7-aabb-651a34233045/img/list/S1O4QEuIG-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/470e73c0-f5d8-11e7-aabb-651a34233045/img/list/S1O4QEuIG-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/470e73c0-f5d8-11e7-aabb-651a34233045/img/list/S1O4QEuIG-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/470e73c0-f5d8-11e7-aabb-651a34233045/img/list/S1O4QEuIG-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: '607bd4d0-21dc-11e8-98fd-dfff2af8a5fd',
        name: '威尼斯義大利餐廳',
        address: '松江路235巷19號',
        city: '臺北市',
        region: '中山區',
        shortId: 'SJR3716',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/607bd4d0-21dc-11e8-98fd-dfff2af8a5fd/img/list/HJQ86L1cz-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/607bd4d0-21dc-11e8-98fd-dfff2af8a5fd/img/list/HJQ86L1cz-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/607bd4d0-21dc-11e8-98fd-dfff2af8a5fd/img/list/HJQ86L1cz-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/607bd4d0-21dc-11e8-98fd-dfff2af8a5fd/img/list/HJQ86L1cz-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/607bd4d0-21dc-11e8-98fd-dfff2af8a5fd/img/list/HJQ86L1cz-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: '664aca20-1eed-11e8-95f9-7512dd201659',
        name: '藝百分精緻spa館',
        address: '金門二街79號',
        city: '桃園市',
        region: '桃園區',
        shortId: 'NAL2668',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/664aca20-1eed-11e8-95f9-7512dd201659/img/list/HyyG-Bnjz-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/664aca20-1eed-11e8-95f9-7512dd201659/img/list/HyyG-Bnjz-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/664aca20-1eed-11e8-95f9-7512dd201659/img/list/HyyG-Bnjz-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/664aca20-1eed-11e8-95f9-7512dd201659/img/list/HyyG-Bnjz-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/664aca20-1eed-11e8-95f9-7512dd201659/img/list/HyyG-Bnjz-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: '84d39490-f698-11e7-aabb-651a34233045',
        name: '林家當歸鴨麵飯',
        address: '龍江路356巷6號1樓',
        city: '臺北市',
        region: '中山區',
        shortId: 'AES8924',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/84d39490-f698-11e7-aabb-651a34233045/img/list/Skg-L-urf-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/84d39490-f698-11e7-aabb-651a34233045/img/list/Skg-L-urf-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/84d39490-f698-11e7-aabb-651a34233045/img/list/Skg-L-urf-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/84d39490-f698-11e7-aabb-651a34233045/img/list/Skg-L-urf-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/84d39490-f698-11e7-aabb-651a34233045/img/list/Skg-L-urf-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: 'aa274e50-2c3d-11e8-875d-db1d51b0d490',
        name: '赤哥汕頭火鍋',
        address: '松江路313巷2號',
        city: '臺北市',
        region: '中山區',
        shortId: 'NPP8218',
        branchName: '台北松江總店',
        imgUrlXl:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/SP/10-%E7%81%AB%E9%8D%8B/01.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/SP/10-%E7%81%AB%E9%8D%8B/01.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/SP/10-%E7%81%AB%E9%8D%8B/01.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/SP/10-%E7%81%AB%E9%8D%8B/01.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/SP/10-%E7%81%AB%E9%8D%8B/01.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: 'cb2c76b0-0696-11e8-8356-dd329e4a8562',
        name: '迦美藥妝',
        address: '中正路300號',
        city: '桃園市',
        region: '龍潭區',
        shortId: 'SCK6700',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/cb2c76b0-0696-11e8-8356-dd329e4a8562/img/list/SyW8PniDM-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/cb2c76b0-0696-11e8-8356-dd329e4a8562/img/list/SyW8PniDM-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/cb2c76b0-0696-11e8-8356-dd329e4a8562/img/list/SyW8PniDM-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/cb2c76b0-0696-11e8-8356-dd329e4a8562/img/list/SyW8PniDM-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/cb2c76b0-0696-11e8-8356-dd329e4a8562/img/list/SyW8PniDM-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: 'd2bc8f20-2052-11e8-b234-5fc7d8db7b23',
        name: '豆趣留聲音樂咖啡館',
        address: '西拉雅大道410號',
        city: '臺南市',
        region: '善化區',
        shortId: 'QFW0506',
        branchName: '南科店',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/d2bc8f20-2052-11e8-b234-5fc7d8db7b23/img/list/SJOGDp35G-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/d2bc8f20-2052-11e8-b234-5fc7d8db7b23/img/list/SJOGDp35G-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/d2bc8f20-2052-11e8-b234-5fc7d8db7b23/img/list/SJOGDp35G-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/d2bc8f20-2052-11e8-b234-5fc7d8db7b23/img/list/SJOGDp35G-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/d2bc8f20-2052-11e8-b234-5fc7d8db7b23/img/list/SJOGDp35G-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: 'd7c13040-3243-11e8-b617-8771e865f096',
        name: '明木滿月油飯店',
        address: '公明路114-4號',
        city: '嘉義市',
        region: '東區',
        shortId: 'RFT3986',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/3.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/3.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/3.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/3.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/08-%E4%B8%AD%E5%BC%8F/3.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: 'e356e850-331a-11e8-900b-a565553e162f',
        name: '好泰泰餐酒館',
        address: '健行路402號',
        city: '臺中市',
        region: '北區',
        shortId: 'OQP6368',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/06-%E7%95%B0%E5%9C%8B/2.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/06-%E7%95%B0%E5%9C%8B/2.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/06-%E7%95%B0%E5%9C%8B/2.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/06-%E7%95%B0%E5%9C%8B/2.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/type/%EF%BC%A1-%E9%A4%90%E9%A3%B2/06-%E7%95%B0%E5%9C%8B/2.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: 'ef1be570-fd85-11e7-ba57-6beb3941a2ae',
        name: 'Sandy Candy手工伴手禮專門店',
        address: '華美街二段322號',
        city: '臺中市',
        region: '北區',
        shortId: 'VGR9877',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/ef1be570-fd85-11e7-ba57-6beb3941a2ae/img/list/SkUDDIeUz-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/ef1be570-fd85-11e7-ba57-6beb3941a2ae/img/list/SkUDDIeUz-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/ef1be570-fd85-11e7-ba57-6beb3941a2ae/img/list/SkUDDIeUz-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/ef1be570-fd85-11e7-ba57-6beb3941a2ae/img/list/SkUDDIeUz-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/ef1be570-fd85-11e7-ba57-6beb3941a2ae/img/list/SkUDDIeUz-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: 'ff7148b0-f8db-11e7-ba57-6beb3941a2ae',
        name: '菓瑟婚紗攝影工作室',
        address: '光華街36號1樓',
        city: '新竹市',
        region: '北區',
        shortId: 'GDB5004',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/ff7148b0-f8db-11e7-ba57-6beb3941a2ae/img/list/SJMAHLlIG-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/ff7148b0-f8db-11e7-ba57-6beb3941a2ae/img/list/SJMAHLlIG-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/ff7148b0-f8db-11e7-ba57-6beb3941a2ae/img/list/SJMAHLlIG-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/ff7148b0-f8db-11e7-ba57-6beb3941a2ae/img/list/SJMAHLlIG-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/ff7148b0-f8db-11e7-ba57-6beb3941a2ae/img/list/SJMAHLlIG-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 2,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: true,
      },
    },
    {
      reStoreInfo: {
        id: '00200450-4cfb-11e7-a37f-49cefa0f6650',
        name: 'Thinking Bar 思考吧',
        address: '延吉街159號',
        city: '臺北市',
        region: '大安區',
        shortId: 'IWV7104',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/00200450-4cfb-11e7-a37f-49cefa0f6650/img/list/H1VE-h17Z-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/00200450-4cfb-11e7-a37f-49cefa0f6650/img/list/H1VE-h17Z-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/00200450-4cfb-11e7-a37f-49cefa0f6650/img/list/H1VE-h17Z-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/00200450-4cfb-11e7-a37f-49cefa0f6650/img/list/H1VE-h17Z-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/00200450-4cfb-11e7-a37f-49cefa0f6650/img/list/H1VE-h17Z-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 1,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: false,
      },
    },
    {
      reStoreInfo: {
        id: '00342890-4cfb-11e7-a37f-49cefa0f6650',
        name: '拉菲爾光療專門店La Fashion Nail',
        address: '錦州街30巷11號1樓',
        city: '臺北市',
        region: '中山區',
        shortId: 'TEL2545',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/00342890-4cfb-11e7-a37f-49cefa0f6650/img/list/H1lF7h1Q--xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/00342890-4cfb-11e7-a37f-49cefa0f6650/img/list/H1lF7h1Q--l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/00342890-4cfb-11e7-a37f-49cefa0f6650/img/list/H1lF7h1Q--m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/00342890-4cfb-11e7-a37f-49cefa0f6650/img/list/H1lF7h1Q--s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/00342890-4cfb-11e7-a37f-49cefa0f6650/img/list/H1lF7h1Q--xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 1,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: false,
      },
    },
    {
      reStoreInfo: {
        id: '003dc580-4cfb-11e7-a37f-49cefa0f6650',
        name: '卡芮女皇殿堂',
        address: '漢口街二段34巷10號',
        city: '臺北市',
        region: '萬華區',
        shortId: 'ITM1653',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/003dc580-4cfb-11e7-a37f-49cefa0f6650/img/list/r1k0NUSlM-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/003dc580-4cfb-11e7-a37f-49cefa0f6650/img/list/r1k0NUSlM-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/003dc580-4cfb-11e7-a37f-49cefa0f6650/img/list/r1k0NUSlM-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/003dc580-4cfb-11e7-a37f-49cefa0f6650/img/list/r1k0NUSlM-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/003dc580-4cfb-11e7-a37f-49cefa0f6650/img/list/r1k0NUSlM-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 1,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: false,
      },
    },
    {
      reStoreInfo: {
        id: '00473b60-4cfb-11e7-a37f-49cefa0f6650',
        name: '老爹手工烘焙坊',
        address: '漢中街35-3號',
        city: '臺北市',
        region: '萬華區',
        shortId: 'IAR5461',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/00473b60-4cfb-11e7-a37f-49cefa0f6650/img/list/SkQkbh1mb-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/00473b60-4cfb-11e7-a37f-49cefa0f6650/img/list/SkQkbh1mb-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/00473b60-4cfb-11e7-a37f-49cefa0f6650/img/list/SkQkbh1mb-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/00473b60-4cfb-11e7-a37f-49cefa0f6650/img/list/SkQkbh1mb-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/00473b60-4cfb-11e7-a37f-49cefa0f6650/img/list/SkQkbh1mb-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 1,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: false,
      },
    },
    {
      reStoreInfo: {
        id: '004bd3d0-fa95-11e7-ba57-6beb3941a2ae',
        name: '無毒家園有限公司',
        address: '福祥路58號6F',
        city: '新北市',
        region: '中和區',
        shortId: 'SYX0076',
        branchName: '',
        imgUrlXl:
          'https://storage.googleapis.com/myre/store/004bd3d0-fa95-11e7-ba57-6beb3941a2ae/img/list/SJWzPIl8z-xl.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/store/004bd3d0-fa95-11e7-ba57-6beb3941a2ae/img/list/SJWzPIl8z-l.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/store/004bd3d0-fa95-11e7-ba57-6beb3941a2ae/img/list/SJWzPIl8z-m.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/store/004bd3d0-fa95-11e7-ba57-6beb3941a2ae/img/list/SJWzPIl8z-s.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/store/004bd3d0-fa95-11e7-ba57-6beb3941a2ae/img/list/SJWzPIl8z-xs.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 1,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: false,
      },
    },
    {
      reStoreInfo: {
        id: '00657e00-2a03-11e8-875d-db1d51b0d490',
        name: '閣樓精品服飾',
        address: '友愛路219號',
        city: '嘉義市',
        region: '西區',
        shortId: 'ZDV2363',
        branchName: '嘉義店',
        imgUrlXl:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/01-%E6%9C%8D%E9%A3%BE/1.jpg',
        imgUrlL:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/01-%E6%9C%8D%E9%A3%BE/1.jpg',
        imgUrlM:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/01-%E6%9C%8D%E9%A3%BE/1.jpg',
        imgUrlS:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/01-%E6%9C%8D%E9%A3%BE/1.jpg',
        imgUrlXs:
          'https://storage.googleapis.com/myre/type/D-%E8%B3%BC%E7%89%A9/01-%E6%9C%8D%E9%A3%BE/1.jpg',
        isQuickReceiveEnabled: false,
        quickReceiveLimitLevel: null,
        isTodayAvailable: true,
        lastMonthReOrderCount: 1,
        avgCostStart: 0,
        avgCostEnd: 0,
        isAvgCostEnabled: false,
      },
      cmsCollection: {
        isFeaturedStore: false,
      },
    },
  ],
  page: {
    dataAmount: 3,
    pageAmount: 1,
    index: 1,
    size: 20,
  },
};
const filterDemoData = {
  item: {
    cities: [
      {
        name: '臺北市',
        regions: [
          {
            name: '中正區',
          },
          {
            name: '大同區',
          },
          {
            name: '中山區',
          },
          {
            name: '松山區',
          },
          {
            name: '大安區',
          },
          {
            name: '萬華區',
          },
          {
            name: '信義區',
          },
          {
            name: '士林區',
          },
          {
            name: '北投區',
          },
          {
            name: '內湖區',
          },
          {
            name: '南港區',
          },
          {
            name: '文山區',
          },
        ],
      },
      {
        name: '基隆市',
        regions: [
          {
            name: '仁愛區',
          },
          {
            name: '信義區',
          },
          {
            name: '中正區',
          },
          {
            name: '中山區',
          },
          {
            name: '安樂區',
          },
          {
            name: '暖暖區',
          },
          {
            name: '七堵區',
          },
        ],
      },
      {
        name: '新北市',
        regions: [
          {
            name: '萬里區',
          },
          {
            name: '金山區',
          },
          {
            name: '板橋區',
          },
          {
            name: '汐止區',
          },
          {
            name: '深坑區',
          },
          {
            name: '石碇區',
          },
          {
            name: '瑞芳區',
          },
          {
            name: '平溪區',
          },
          {
            name: '雙溪區',
          },
          {
            name: '貢寮區',
          },
          {
            name: '新店區',
          },
          {
            name: '坪林區',
          },
          {
            name: '烏來區',
          },
          {
            name: '永和區',
          },
          {
            name: '中和區',
          },
          {
            name: '土城區',
          },
          {
            name: '三峽區',
          },
          {
            name: '樹林區',
          },
          {
            name: '鶯歌區',
          },
          {
            name: '三重區',
          },
          {
            name: '新莊區',
          },
          {
            name: '泰山區',
          },
          {
            name: '林口區',
          },
          {
            name: '蘆洲區',
          },
          {
            name: '五股區',
          },
          {
            name: '八里區',
          },
          {
            name: '淡水區',
          },
          {
            name: '三芝區',
          },
          {
            name: '石門區',
          },
        ],
      },
      {
        name: '宜蘭縣',
        regions: [
          {
            name: '宜蘭市',
          },
          {
            name: '壯圍鄉',
          },
          {
            name: '頭城鎮',
          },
          {
            name: '礁溪鄉',
          },
          {
            name: '員山鄉',
          },
          {
            name: '羅東鎮',
          },
          {
            name: '三星鄉',
          },
          {
            name: '大同鄉',
          },
          {
            name: '五結鄉',
          },
          {
            name: '冬山鄉',
          },
          {
            name: '蘇澳鎮',
          },
          {
            name: '南澳鄉',
          },
        ],
      },
      {
        name: '新竹市',
        regions: [
          {
            name: '東區',
          },
          {
            name: '北區',
          },
          {
            name: '香山區',
          },
        ],
      },
      {
        name: '新竹縣',
        regions: [
          {
            name: '寶山鄉',
          },
          {
            name: '竹北市',
          },
          {
            name: '湖口鄉',
          },
          {
            name: '新豐鄉',
          },
          {
            name: '新埔鎮',
          },
          {
            name: '關西鎮',
          },
          {
            name: '芎林鄉',
          },
          {
            name: '竹東鎮',
          },
          {
            name: '五峰鄉',
          },
          {
            name: '橫山鄉',
          },
          {
            name: '尖石鄉',
          },
          {
            name: '北埔鄉',
          },
          {
            name: '峨眉鄉',
          },
        ],
      },
      {
        name: '桃園市',
        regions: [
          {
            name: '中壢區',
          },
          {
            name: '平鎮區',
          },
          {
            name: '龍潭區',
          },
          {
            name: '楊梅區',
          },
          {
            name: '新屋區',
          },
          {
            name: '觀音區',
          },
          {
            name: '桃園區',
          },
          {
            name: '龜山區',
          },
          {
            name: '八德區',
          },
          {
            name: '大溪區',
          },
          {
            name: '復興區',
          },
          {
            name: '大園區',
          },
          {
            name: '蘆竹區',
          },
        ],
      },
      {
        name: '苗栗縣',
        regions: [
          {
            name: '竹南鎮',
          },
          {
            name: '頭份市',
          },
          {
            name: '三灣鄉',
          },
          {
            name: '南庄鄉',
          },
          {
            name: '獅潭鄉',
          },
          {
            name: '後龍鎮',
          },
          {
            name: '通霄鎮',
          },
          {
            name: '苑裡鎮',
          },
          {
            name: '苗栗市',
          },
          {
            name: '造橋鄉',
          },
          {
            name: '頭屋鄉',
          },
          {
            name: '公館鄉',
          },
          {
            name: '大湖鄉',
          },
          {
            name: '泰安鄉',
          },
          {
            name: '銅鑼鄉',
          },
          {
            name: '三義鄉',
          },
          {
            name: '西湖鄉',
          },
          {
            name: '卓蘭鎮',
          },
        ],
      },
      {
        name: '臺中市',
        regions: [
          {
            name: '中區',
          },
          {
            name: '東區',
          },
          {
            name: '南區',
          },
          {
            name: '西區',
          },
          {
            name: '北區',
          },
          {
            name: '北屯區',
          },
          {
            name: '西屯區',
          },
          {
            name: '南屯區',
          },
          {
            name: '太平區',
          },
          {
            name: '大里區',
          },
          {
            name: '霧峰區',
          },
          {
            name: '烏日區',
          },
          {
            name: '豐原區',
          },
          {
            name: '后里區',
          },
          {
            name: '石岡區',
          },
          {
            name: '東勢區',
          },
          {
            name: '和平區',
          },
          {
            name: '新社區',
          },
          {
            name: '潭子區',
          },
          {
            name: '大雅區',
          },
          {
            name: '神岡區',
          },
          {
            name: '大肚區',
          },
          {
            name: '沙鹿區',
          },
          {
            name: '龍井區',
          },
          {
            name: '梧棲區',
          },
          {
            name: '清水區',
          },
          {
            name: '大甲區',
          },
          {
            name: '外埔區',
          },
          {
            name: '大安區',
          },
        ],
      },
      {
        name: '彰化縣',
        regions: [
          {
            name: '彰化市',
          },
          {
            name: '員林市',
          },
          {
            name: '田中鎮',
          },
          {
            name: '鹿港鎮',
          },
          {
            name: '芬園鄉',
          },
          {
            name: '花壇鄉',
          },
          {
            name: '秀水鄉',
          },
          {
            name: '福興鄉',
          },
          {
            name: '線西鄉',
          },
          {
            name: '和美鎮',
          },
          {
            name: '伸港鄉',
          },
          {
            name: '社頭鄉',
          },
          {
            name: '永靖鄉',
          },
          {
            name: '埔心鄉',
          },
          {
            name: '溪湖鎮',
          },
          {
            name: '大村鄉',
          },
          {
            name: '埔鹽鄉',
          },
          {
            name: '北斗鎮',
          },
          {
            name: '田尾鄉',
          },
          {
            name: '埤頭鄉',
          },
          {
            name: '溪州鄉',
          },
          {
            name: '竹塘鄉',
          },
          {
            name: '二林鎮',
          },
          {
            name: '大城鄉',
          },
          {
            name: '芳苑鄉',
          },
          {
            name: '二水鄉',
          },
        ],
      },
      {
        name: '南投縣',
        regions: [
          {
            name: '南投市',
          },
          {
            name: '中寮鄉',
          },
          {
            name: '草屯鎮',
          },
          {
            name: '國姓鄉',
          },
          {
            name: '埔里鎮',
          },
          {
            name: '仁愛鄉',
          },
          {
            name: '名間鄉',
          },
          {
            name: '集集鎮',
          },
          {
            name: '水里鄉',
          },
          {
            name: '魚池鄉',
          },
          {
            name: '信義鄉',
          },
          {
            name: '竹山鎮',
          },
          {
            name: '鹿谷鄉',
          },
        ],
      },
      {
        name: '嘉義市',
        regions: [
          {
            name: '西區',
          },
          {
            name: '東區',
          },
        ],
      },
      {
        name: '嘉義縣',
        regions: [
          {
            name: '番路鄉',
          },
          {
            name: '梅山鄉',
          },
          {
            name: '竹崎鄉',
          },
          {
            name: '阿里山鄉',
          },
          {
            name: '中埔鄉',
          },
          {
            name: '大埔鄉',
          },
          {
            name: '水上鄉',
          },
          {
            name: '鹿草鄉',
          },
          {
            name: '太保市',
          },
          {
            name: '朴子市',
          },
          {
            name: '東石鄉',
          },
          {
            name: '六腳鄉',
          },
          {
            name: '新港鄉',
          },
          {
            name: '民雄鄉',
          },
          {
            name: '大林鎮',
          },
          {
            name: '溪口鄉',
          },
          {
            name: '義竹鄉',
          },
          {
            name: '布袋鎮',
          },
        ],
      },
      {
        name: '雲林縣',
        regions: [
          {
            name: '斗南鎮',
          },
          {
            name: '大埤鄉',
          },
          {
            name: '虎尾鎮',
          },
          {
            name: '土庫鎮',
          },
          {
            name: '褒忠鄉',
          },
          {
            name: '東勢鄉',
          },
          {
            name: '臺西鄉',
          },
          {
            name: '崙背鄉',
          },
          {
            name: '麥寮鄉',
          },
          {
            name: '斗六市',
          },
          {
            name: '林內鄉',
          },
          {
            name: '古坑鄉',
          },
          {
            name: '莿桐鄉',
          },
          {
            name: '西螺鎮',
          },
          {
            name: '二崙鄉',
          },
          {
            name: '北港鎮',
          },
          {
            name: '水林鄉',
          },
          {
            name: '口湖鄉',
          },
          {
            name: '四湖鄉',
          },
          {
            name: '元長鄉',
          },
        ],
      },
      {
        name: '臺南市',
        regions: [
          {
            name: '中西區',
          },
          {
            name: '東區',
          },
          {
            name: '南區',
          },
          {
            name: '北區',
          },
          {
            name: '安平區',
          },
          {
            name: '安南區',
          },
          {
            name: '永康區',
          },
          {
            name: '歸仁區',
          },
          {
            name: '新化區',
          },
          {
            name: '左鎮區',
          },
          {
            name: '玉井區',
          },
          {
            name: '楠西區',
          },
          {
            name: '南化區',
          },
          {
            name: '仁德區',
          },
          {
            name: '關廟區',
          },
          {
            name: '龍崎區',
          },
          {
            name: '官田區',
          },
          {
            name: '麻豆區',
          },
          {
            name: '佳里區',
          },
          {
            name: '西港區',
          },
          {
            name: '七股區',
          },
          {
            name: '將軍區',
          },
          {
            name: '學甲區',
          },
          {
            name: '北門區',
          },
          {
            name: '新營區',
          },
          {
            name: '後壁區',
          },
          {
            name: '白河區',
          },
          {
            name: '東山區',
          },
          {
            name: '六甲區',
          },
          {
            name: '下營區',
          },
          {
            name: '柳營區',
          },
          {
            name: '鹽水區',
          },
          {
            name: '善化區',
          },
          {
            name: '新市區',
          },
          {
            name: '大內區',
          },
          {
            name: '山上區',
          },
          {
            name: '安定區',
          },
        ],
      },
      {
        name: '高雄市',
        regions: [
          {
            name: '新興區',
          },
          {
            name: '前金區',
          },
          {
            name: '苓雅區',
          },
          {
            name: '鹽埕區',
          },
          {
            name: '鼓山區',
          },
          {
            name: '旗津區',
          },
          {
            name: '前鎮區',
          },
          {
            name: '三民區',
          },
          {
            name: '楠梓區',
          },
          {
            name: '小港區',
          },
          {
            name: '左營區',
          },
          {
            name: '仁武區',
          },
          {
            name: '大社區',
          },
          {
            name: '東沙群島',
          },
          {
            name: '南沙群島',
          },
          {
            name: '岡山區',
          },
          {
            name: '路竹區',
          },
          {
            name: '阿蓮區',
          },
          {
            name: '田寮區',
          },
          {
            name: '燕巢區',
          },
          {
            name: '橋頭區',
          },
          {
            name: '梓官區',
          },
          {
            name: '彌陀區',
          },
          {
            name: '永安區',
          },
          {
            name: '湖內區',
          },
          {
            name: '鳳山區',
          },
          {
            name: '大寮區',
          },
          {
            name: '林園區',
          },
          {
            name: '鳥松區',
          },
          {
            name: '大樹區',
          },
          {
            name: '旗山區',
          },
          {
            name: '美濃區',
          },
          {
            name: '六龜區',
          },
          {
            name: '內門區',
          },
          {
            name: '杉林區',
          },
          {
            name: '甲仙區',
          },
          {
            name: '桃源區',
          },
          {
            name: '那瑪夏區',
          },
          {
            name: '茂林區',
          },
          {
            name: '茄萣區',
          },
        ],
      },
      {
        name: '澎湖縣',
        regions: [
          {
            name: '馬公市',
          },
          {
            name: '西嶼鄉',
          },
          {
            name: '望安鄉',
          },
          {
            name: '七美鄉',
          },
          {
            name: '白沙鄉',
          },
          {
            name: '湖西鄉',
          },
        ],
      },
      {
        name: '金門縣',
        regions: [
          {
            name: '金沙鎮',
          },
          {
            name: '金湖鎮',
          },
          {
            name: '金寧鄉',
          },
          {
            name: '金城鎮',
          },
          {
            name: '烈嶼鄉',
          },
          {
            name: '烏坵鄉',
          },
        ],
      },
      {
        name: '屏東縣',
        regions: [
          {
            name: '屏東市',
          },
          {
            name: '三地門鄉',
          },
          {
            name: '霧臺鄉',
          },
          {
            name: '瑪家鄉',
          },
          {
            name: '九如鄉',
          },
          {
            name: '里港鄉',
          },
          {
            name: '高樹鄉',
          },
          {
            name: '鹽埔鄉',
          },
          {
            name: '長治鄉',
          },
          {
            name: '麟洛鄉',
          },
          {
            name: '竹田鄉',
          },
          {
            name: '內埔鄉',
          },
          {
            name: '萬丹鄉',
          },
          {
            name: '潮州鎮',
          },
          {
            name: '泰武鄉',
          },
          {
            name: '來義鄉',
          },
          {
            name: '萬巒鄉',
          },
          {
            name: '崁頂鄉',
          },
          {
            name: '新埤鄉',
          },
          {
            name: '南州鄉',
          },
          {
            name: '林邊鄉',
          },
          {
            name: '東港鎮',
          },
          {
            name: '琉球鄉',
          },
          {
            name: '佳冬鄉',
          },
          {
            name: '新園鄉',
          },
          {
            name: '枋寮鄉',
          },
          {
            name: '枋山鄉',
          },
          {
            name: '春日鄉',
          },
          {
            name: '獅子鄉',
          },
          {
            name: '車城鄉',
          },
          {
            name: '牡丹鄉',
          },
          {
            name: '恆春鎮',
          },
          {
            name: '滿州鄉',
          },
        ],
      },
      {
        name: '臺東縣',
        regions: [
          {
            name: '臺東市',
          },
          {
            name: '綠島鄉',
          },
          {
            name: '蘭嶼鄉',
          },
          {
            name: '延平鄉',
          },
          {
            name: '卑南鄉',
          },
          {
            name: '鹿野鄉',
          },
          {
            name: '關山鎮',
          },
          {
            name: '海端鄉',
          },
          {
            name: '池上鄉',
          },
          {
            name: '東河鄉',
          },
          {
            name: '成功鎮',
          },
          {
            name: '長濱鄉',
          },
          {
            name: '太麻里鄉',
          },
          {
            name: '金峰鄉',
          },
          {
            name: '大武鄉',
          },
          {
            name: '達仁鄉',
          },
        ],
      },
      {
        name: '花蓮縣',
        regions: [
          {
            name: '花蓮市',
          },
          {
            name: '新城鄉',
          },
          {
            name: '秀林鄉',
          },
          {
            name: '吉安鄉',
          },
          {
            name: '壽豐鄉',
          },
          {
            name: '鳳林鎮',
          },
          {
            name: '光復鄉',
          },
          {
            name: '豐濱鄉',
          },
          {
            name: '瑞穗鄉',
          },
          {
            name: '萬榮鄉',
          },
          {
            name: '玉里鎮',
          },
          {
            name: '卓溪鄉',
          },
          {
            name: '富里鄉',
          },
        ],
      },
    ],
    keywords: ['餐飲', '購物', '高CP值', '2021台中美食祭', '伴手禮', '複合式', '下午茶'],
    mainBusinessTypes: [
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '飯店',
          },
          {
            subBusinessTypes: [],
            name: '民宿',
          },
        ],
        name: '住宿',
      },
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '寵物醫療',
          },
          {
            subBusinessTypes: [],
            name: '寵物用品',
          },
          {
            subBusinessTypes: [],
            name: '寵物旅館',
          },
          {
            subBusinessTypes: [],
            name: '寵物美容',
          },
        ],
        name: '寵物',
      },
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '命理',
          },
          {
            subBusinessTypes: [],
            name: '室內設計',
          },
          {
            subBusinessTypes: [],
            name: '廣告行銷',
          },
          {
            subBusinessTypes: [],
            name: '租賃服務',
          },
          {
            subBusinessTypes: [],
            name: '婚紗',
          },
          {
            subBusinessTypes: [],
            name: '保險經紀',
          },
          {
            subBusinessTypes: [],
            name: '維修服務',
          },
          {
            subBusinessTypes: [],
            name: '顧問',
          },
          {
            subBusinessTypes: [],
            name: '其他',
          },
        ],
        name: '服務',
      },
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '美髮',
          },
          {
            subBusinessTypes: [],
            name: '美容SPA',
          },
          {
            subBusinessTypes: [],
            name: '按摩',
          },
          {
            subBusinessTypes: [],
            name: '美甲美睫',
          },
          {
            subBusinessTypes: [],
            name: '紋身',
          },
        ],
        name: '美容舒壓',
      },
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '教學',
          },
          {
            subBusinessTypes: [],
            name: '遊戲',
          },
          {
            subBusinessTypes: [],
            name: '旅遊休閒',
          },
          {
            subBusinessTypes: [],
            name: '其他服務',
          },
        ],
        name: '育樂',
      },
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '文具禮品',
          },
          {
            subBusinessTypes: [],
            name: '運動用品',
          },
          {
            subBusinessTypes: [],
            name: '居家生活',
          },
          {
            subBusinessTypes: [],
            name: '伴手禮',
          },
          {
            subBusinessTypes: [],
            name: '3C',
          },
          {
            subBusinessTypes: [],
            name: '母嬰用品',
          },
          {
            subBusinessTypes: [],
            name: '服飾',
          },
          {
            subBusinessTypes: [],
            name: '其他',
          },
          {
            subBusinessTypes: [],
            name: '美妝保養',
          },
        ],
        name: '購物',
      },
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '中藥行',
          },
          {
            subBusinessTypes: [],
            name: '藥局',
          },
          {
            subBusinessTypes: [],
            name: '健身房',
          },
          {
            subBusinessTypes: [],
            name: '產後護理',
          },
          {
            subBusinessTypes: [],
            name: '診所',
          },
          {
            subBusinessTypes: [],
            name: '醫美',
          },
        ],
        name: '醫療保健',
      },
      {
        subBusinessTypes: [
          {
            subBusinessTypes: [],
            name: '冰品茶飲',
          },
          {
            subBusinessTypes: [],
            name: '早午餐',
          },
          {
            subBusinessTypes: [],
            name: '日式',
          },
          {
            subBusinessTypes: [],
            name: '小吃',
          },
          {
            subBusinessTypes: [],
            name: '中式',
          },
          {
            subBusinessTypes: [],
            name: '下午茶',
          },
          {
            subBusinessTypes: [],
            name: '複合式',
          },
          {
            subBusinessTypes: [],
            name: '異國',
          },
        ],
        name: '餐飲',
      },
    ],
  },
};
const state = reactive({
  storeData: {},
  filterData: {},
});

async function searchStores(params) {
  console.log('searchStores', params);
  state.storeData = await storeDemoData;
}
async function getOption() {
  console.log('getOption');
  state.filterData = await filterDemoData;
}
</script>
