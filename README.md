# vue-store-list-package

### 安裝

```bash
npm install vue-store-list-package // 目前未公開發佈
```

### Example

```html
<!-- Vue 2 -->
<template>
  <VueReStoreList
    :storeData="state.storeData"
    :filterData="state.filterData"
    :locale="state.locale"
    @searchStores="searchStores"
    @getOption="getOption"
  />
</template>

<script>
import { VueReStoreList } from 'vue-store-list-package';
import 'vue-store-list-package/dist/vue-store-list-package.css';

  export default {
    components: {
      VueReStoreList
    },
    data() {
      return {
        storeData: { ... },
        filterData: { ... },
        locale: 'zh-TW' // en-US
      }
    }
    methods: {
      async searchStores(params) {
        this.storeData = await ...;
      },
      getOption() {
        this.filterData = await ...;
      }
    }
  }
</script>
```

### Props

| Name       | Description          | type     | default | required |
| ---------- | -------------------- | -------- | ------- | -------- |
| storeData  | 店家資料             | `object` | none    | true     |
| filterData | 過濾選項(地區、業態) | `object` | none    | true     |
| locale     | 多語系               | `string` | 'zh-TW' | false    |

### 備註

可參考 demo.vue

解決 ? ?? 問題：
必須安裝 @vue/cli-plugin-babel@4.5.13 和 babel.config.js

*V3.vue 是 Vue3 寫法，但必須配合Vue3環境才能使用