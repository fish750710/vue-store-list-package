<template>
  <div class="store">
    <div class="store__control">
      <div class="store__control__top">
        <div class="logo">
          <!-- <img src="./assets/images/icon-reLogo.png" alt="RE" /> -->
          <div class="logoImg"></div>
        </div>
      </div>
      <div class="store__navbar">
        <div class="store__search">
          <div class="keyword">
            <input type="text" v-model="keyword" @keyup.enter="keywordSearch" />
            <div class="keyword__button" @click="keywordSearch">
              <i class="icon-magnifier"></i>
            </div>
          </div>
        </div>
        <div class="store__types-box">
          <div class="formitem" v-if="!isMobile">
            <div class="name">{{ $t('businessType') }}</div>
            <Select
              v-model="mainType"
              :list="mainTypes"
              @updateModelValue="mainType = $event"
              @handleChange="handleTypes"
            />
            <Select
              v-model="subType"
              v-show="subBusinessTypes"
              :list="subBusinessTypes"
              :subSelect="true"
              @updateModelValue="subType = $event"
              @handleChange="handleSubClick"
            />
          </div>
          <div
            class="btn-types"
            @click.stop="
              isShowTypeModel = !isShowTypeModel;
              isShowCityModel = false;
            "
            v-else
          >
            <span>{{
              subType ? subType : mainType ? mainType : $t('businessType')
            }}</span>
          </div>
          <div class="formitem-m type-box-m" v-show="isShowTypeModel">
            <Select
              v-model="mainType"
              :list="mainTypes"
              @updateModelValue="mainType = $event"
              @handleChange="handleTypes"
            />
            <Select
              v-model="subType"
              v-show="subBusinessTypes"
              :list="subBusinessTypes"
              :subSelect="true"
              @updateModelValue="subType = $event"
              @handleChange="handleSubClick"
            />
          </div>
        </div>
        <div class="store__city-box">
          <div class="formitem" v-if="!isMobile">
            <div class="name">{{ $t('area') }}</div>
            <Select
              v-model="city"
              :list="taiwanAddressData"
              @updateModelValue="city = $event"
              @handleChange="handleDistrict"
            />
            <Select
              v-model="region"
              v-show="regions"
              :list="regions"
              :subSelect="true"
              @updateModelValue="region = $event"
              @handleChange="handleSubClick"
            />
          </div>
          <div
            class="btn-city"
            @click.stop="
              isShowCityModel = !isShowCityModel;
              isShowTypeModel = false;
            "
            v-else
          >
            <span>{{ region ? region : city ? city : $t('area') }}</span>
          </div>
          <div class="formitem-m" v-show="isShowCityModel">
            <Select
              v-model="city"
              :list="taiwanAddressData"
              @updateModelValue="city = $event"
              @handleChange="handleDistrict"
            />
            <Select
              v-model="region"
              v-show="regions"
              :list="regions"
              :subSelect="true"
              @updateModelValue="region = $event"
              @handleChange="handleSubClick"
            />
          </div>
        </div>
      </div>
      <div class="store__card-wrap" @scroll="handleScroll">
        <div
          class="store__card"
          v-for="(item, index) in storesList"
          :key="index"
          ref="card"
        >
          <div class="image">
            <figure>
              <img
                :src="item.reStoreInfo.imgUrlM"
                :alt="item.reStoreInfo.name"
              />
              <span>{{
                item.reStoreInfo.isTodayAvailable ? $t('day_off') : $t('closed')
              }}</span>
            </figure>
          </div>
          <div class="content">
            <div class="name">{{ item.reStoreInfo.name }}</div>
            <div class="branchName">{{ item.reStoreInfo.branchName }}</div>
            <div
              v-if="
                getAvgCost(
                  item.reStoreInfo.avgCostStart,
                  item.reStoreInfo.avgCostEnd,
                )
              "
              class="avgCost"
            >
              <i class="icon-tag"></i>
              {{
                $t('avgCost', {
                  avgCost: getAvgCost(
                    item.reStoreInfo.avgCostStart,
                    item.reStoreInfo.avgCostEnd,
                  ),
                })
              }}
            </div>
            <div class="address">
              {{ item.reStoreInfo.city }}{{ item.reStoreInfo.region }}
            </div>
          </div>
        </div>
        <div class="message-box">{{ message }}</div>
      </div>
      <!-- <div v-if="state.iframeSrc" class="store__store-info">
        <div class="store__store-info__content">
          <div class="close">
            <a :href="originSrc" target="_blank">{{ $t('official.open_new_window') }}</a>
            <a :href="state.originSrc" target="_blank">另開頁面</a>
            <i
              class="icon-close"
              @click="
                iframeSrc = '';
                originSrc = '';
              "
            ></i>
          </div>
          <iframe
            :src="state.iframeSrc"
            :key="state.iframeSrc"
            frameborder="0"
            @click.stop
          ></iframe>
        </div>
      </div> -->

      <!-- <div id="js-store">
        <div class="store__message" :class="{ 'is-active': showMessage }">
          {{ message }}
        </div>
        <div class="store__loading">Loading...</div>
        <div class="store__position" @click="getLocation(true)">
          <i class="icon-position"></i>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { messages, translate } from '@/locale';
import Select from '@/components/select';

export default {
  components: {
    Select,
  },
  props: {
    storeData: {
      type: Object,
      default() {
        return {};
      },
    },
    filterData: {
      type: Object,
      default() {
        return {};
      },
    },
    locale: {
      type: String,
      default: 'zh-TW',
    },
  },
  data() {
    return {
      logoIcon: require('./assets/images/icon-reLogo.png'),
      stores: [],
      storesListArr: [],
      // isLoading: false,
      keyword: '',
      message: '',
      // showMessage: false,
      // iframeSrc: '',
      // showTagFilter: false,
      // taiwanAddressData: [],
      city: '',
      district: {},
      region: '', // 選定地區
      isShowCityModel: false,
      isShowTypeModel: false,
      isMobile: false,
      // mainTypes: [],
      mainType: '', // 選定主業態
      subTypes: [],
      subType: '', // 選定子業態
      // page: {},
      observer: null,
    };
  },
  computed: {
    subBusinessTypes() {
      return this.subTypes?.subBusinessTypes;
    },
    regions() {
      return this.district?.regions;
    },
    page() {
      return this.storeData?.page ?? null;
    },
    mainTypes() {
      return this.filterData?.item?.mainBusinessTypes ?? null;
    },
    taiwanAddressData() {
      return this.filterData?.item?.cities ?? null;
    },
    storesList() {
      const storeData = this.storeData?.items ?? null;
      if (storeData) {
        this.storesListArr = this.storesListArr.concat(storeData);
      }
      return this.storesListArr;
    },
  },
  methods: {
    handleScroll() {
      if (this.$refs.card.length <= 0) return;
      const Lis = this.$refs.card[this.$refs.card.length - 1];
      this.observer.observe(Lis);
    },
    callback(entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || this.storesListArr.length % 20 !== 0) {
          if (this.storesListArr.length % 20 !== 0)
            this.message = '已經到底了拉！';
          return;
        }
        this.searchStores(this.page.index + 1);
      });
    },
    mobile() {
      this.isMobile = global.navigator?.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
      );
    },
    getOption() {
      this.$emit('getOption');
    },
    searchStores(p, ps = 20) {
      this.isShowCityModel = false;
      this.isShowTypeModel = false;
      this.message = '';
      const params = {
        p,
        ps,
      };
      if (this.city) {
        params.city = this.city;
      }
      if (this.region) {
        params.region = this.region;
      }
      if (this.mainType) {
        params['main-business-type-name'] = this.mainType;
      }
      if (this.subType) {
        params['sub-business-type-name'] = this.subType;
      }
      const keywordTrim = this.keyword.trim();
      if (keywordTrim.length > 0) {
        const keywordArr = keywordTrim.split(/\s+/);
        if (keywordArr.length > 1) {
          params.keywords = keywordArr;
        } else {
          params.keyword = this.keyword;
        }
      }
      this.$emit('searchStores', params);
    },
    getAvgCost(avgCostStart, avgCostEnd) {
      switch (true) {
        case !avgCostStart && !avgCostEnd:
          return '';
        case !avgCostStart && avgCostEnd:
          return this.parseCommaNumber(avgCostEnd);
        case avgCostStart && !avgCostEnd:
        case avgCostStart === avgCostEnd:
          return this.parseCommaNumber(avgCostStart);
        default:
          return `${this.parseCommaNumber(
            avgCostStart,
          )} ~ ${this.parseCommaNumber(avgCostEnd)}}`;
      }
    },
    handleSubClick(e) {
      this.storesListArr = [];
      this.isShowCityModel = false;
      this.searchStores();
    },
    // 地區選擇
    handleDistrict() {
      this.region = '';
      this.storesListArr = [];
      this.searchStores();
      this.district = this.taiwanAddressData.find((item) => {
        if (this.city === item.name) {
          return item;
        }
      });
    },
    // 業態選擇
    handleTypes(e) {
      this.subType = '';
      this.storesListArr = [];
      this.searchStores();
      this.subTypes = this.mainTypes.find((item) => {
        if (this.mainType === item.name) {
          if (item.subBusinessTypes.length > 0) {
            return item;
          }
        }
      });
    },
    keywordSearch() {
      this.storesListArr = [];
      this.searchStores();
    },
    parseCommaNumber(num) {
      try {
        // return (+num).toLocaleString(props.locale, {style:'currency', currency: 'TWD'});
        return (+num).toLocaleString();
      } catch (error) {
        return num;
      }
    },
    $t(key, ...args) {
      return translate(key, this.locale, ...args);
    },
  },
  mounted() {
    this.mobile();
    this.getOption();
    this.searchStores();
    const options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    };
    this.observer = new IntersectionObserver(this.callback, options);
  },
};
</script>

<style lang="scss">
// #js-store {
//   position: relative;
//   width: calc(100% - 350px);
//   height: 100vh;
//   margin-left: 350px;
//   background-color: #ddd;
//   @include respond-to(sm) {
//     width: 100%;
//     margin: 0;
//   }
// }
.store {
  // &__loading {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   font-size: 2rem;
  //   font-weight: bold;
  //   height: 100%;
  //   width: 100%;
  // }
  &__control {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    padding: 0;
    display: flex;
    flex-direction: column;
    @include respond-to(sm) {
      top: initial;
      right: 0;
      bottom: 15px;
      width: auto;
      display: block;
      background-color: transparent;
      box-shadow: none;
    }
    &__top {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      background: #fff;
      border-bottom: 2px solid #ddd;
      z-index: 9999;
      // @include respond-to(sm) {
      //   display: inline-block;
      //   border-radius: 50px;
      //   padding: 7px 15px;
      //   margin-left: 10px;
      // }
      .logo {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 80px;
          cursor: pointer;
          @include respond-to(sm) {
            width: 60px;
          }
        }
        .logoImg {
          background: url(./assets/images/icon-reLogo.png) no-repeat 0 0/100%;
          cursor: pointer;
          width: 80px;
          height: 20px;
          @include respond-to(sm) {
            width: 60px;
          }
        }
      }
      @include respond-to(sm) {
        position: fixed;
        top: 0px;
        z-index: 9999;
        width: 100%;
      }
    }
  }
  &__navbar {
    position: fixed;
    top: 42px;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    @include respond-to(sm) {
      position: fixed;
      top: 35px;
      z-index: 9999;
      width: 100%;
    }
  }
  &__card-wrap {
    margin: 7rem auto 0;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 100vh;
    width: 100%;
    align-content: flex-start;
    @include respond-to(sm) {
      margin-top: 88px;
    }
  }
  &__card {
    position: relative;
    border: 1px solid #efefef;
    background-color: #fff;
    border-radius: 3px;
    margin: 8px;
    padding: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    width: 450px;
    height: 180px;
    @include respond-to(sm) {
      display: inline-flex;
      min-width: 90vw;
      height: auto;
      margin-right: 10px;
    }

    &-wrap {
      padding: 0 10px;
      @include respond-to(sm) {
        display: flex;
        align-items: center;
        min-height: 70px;
      }
    }

    .image {
      position: relative;
      width: 65%;

      margin-right: 10px;

      @include respond-to(sm) {
        width: 55%;
      }

      &.is-disabled {
        span {
          opacity: 1;
        }
      }

      figure {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 57.375%;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
      }

      span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(#000, 0.7);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        z-index: 2;
      }
    }

    .content {
      position: relative;
      flex: 1;
      line-height: 1.2;

      .name {
        font-weight: bold;
        font-size: 15px;
        @include respond-to(sm) {
          font-size: 13px;
        }
      }
      .branchName {
        font-size: 12px;
        color: #888;
        margin-bottom: 15px;
      }
      .avgCost {
        font-size: 12px;
        color: #888;
        display: flex;
        align-items: center;
        i {
          margin-right: 5px;
        }
      }
      .address {
        margin-top: 10px;
      }
    }
    .businessType {
      position: absolute;
      top: 5px;
      left: 10px;
      border: 1px solid #ddd;
      border-radius: 50px;
      padding: 3px 10px;
      line-height: 1;
      font-size: 12px;
    }
  }

  // &__position {
  //   position: absolute;
  //   z-index: 401;
  //   left: 10px;
  //   top: 72px;
  //   border-radius: 4px;
  //   background: #fff;
  //   width: 26px;
  //   height: 26px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  //   font-size: 1.1rem;
  //   cursor: pointer;

  //   @include respond-to(sm) {
  //     width: 30px;
  //     height: 30px;
  //     top: 81px;
  //     left: 12px;
  //   }
  // }

  &__search {
    z-index: 999;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 400px;
    @include respond-to(sm) {
      max-width: calc(100% - 70px);
      display: block;
      width: 60%;
    }

    .keyword {
      flex: 1;
      max-width: 400px;
      margin-left: 15px;
      display: flex;
      @include respond-to(sm) {
        max-width: none;
      }

      &__button {
        background-color: $re;
        color: #fff;
        line-height: 32px;
        padding: 0 20px;
        border-radius: 0 4px 4px 0;
        font-size: 1.3rem;
        cursor: pointer;
      }
      input {
        flex: 1;
        border-radius: 4px 0 0 4px;
        border: 1px solid #888;
        background-color: rgba(#fff, 0.8);
        line-height: 20px;
        padding: 5px 10px;
        width: 100%;
      }
    }

    button {
      border-radius: 50px;
      background-color: #fff;
      color: $re;
      padding: 5px 25px;
      border: none;
      font-weight: bold;
      font-size: 15px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      @include respond-to(sm) {
        font-size: 13px;
      }

      i {
        font-size: 1.2rem;
        margin-right: 5px;
      }
    }
  }
  // &__tag-name {
  //   text-align: center;
  // }
  // &__tag-filter {
  //   z-index: 1000;
  //   position: relative;
  //   background-color: #fff;
  //   border-radius: 50px;
  //   border: 1px solid #ddd;
  //   color: $re;
  //   padding: 2px 20px;
  //   font-size: 1rem;
  //   margin: 0 10px;
  //   cursor: pointer;
  //   min-width: 45px;

  //   @include respond-to(sm) {
  //     font-size: 13px;
  //     padding: 0.5rem;
  //     border-radius: 0.5rem;
  //   }

  //   &__content {
  //     position: absolute;
  //     z-index: 1;
  //     top: calc(100% + 10px);
  //     right: 0;
  //     min-width: 100%;
  //     background-color: #fff;
  //     border: 1px solid #ddd;
  //     .item {
  //       padding: 5px 15px;
  //       border-bottom: 1px solid #ddd;
  //       color: #333;
  //       white-space: nowrap;
  //       &:hover {
  //         background-color: #efefef;
  //       }
  //       &[class*="c-"]::before {
  //         content: "";
  //         display: inline-block;
  //         width: 8px;
  //         height: 8px;
  //         border-radius: 50%;
  //         margin-right: 7px;
  //         background-color: #ddd;
  //       }
  //       @for $i from 0 through 20 {
  //         &.c-#{$i}::before {
  //           background: rgb(random(255), random(255), random(255));
  //         }
  //       }
  //       // &.c-0::before {
  //       //   background-color: #edce4d;
  //       // }
  //       // &.c-1::before {
  //       //   background-color: #f67e21;
  //       // }
  //       // &.c-2::before {
  //       //   background-color: #01b4ae;
  //       // }
  //       // &.c-3::before {
  //       //   background-color: #6accea;
  //       // }
  //       // &.c-4::before {
  //       //   background-color: #5a71c0;
  //       // }
  //     }
  //   }
  // }

  // &__store-info {
  //   position: fixed;
  //   top: 88px;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background-color: rgba(0, 0, 0, 0.7);
  //   padding: 15px;
  //   z-index: 1001;

  //   &__content {
  //     margin: 0 auto;
  //     max-width: 500px;
  //     width: 100%;
  //     height: 100%;
  //     display: flex;
  //     flex-direction: column;

  //     .close {
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       margin-bottom: 10px;

  //       a {
  //         font-size: 1rem;
  //         color: #fff;
  //         text-decoration: underline;
  //       }
  //       i {
  //         cursor: pointer;
  //         color: #fff;
  //         font-size: 1.5rem;
  //       }
  //     }

  //     iframe {
  //       display: block;
  //       flex: 1;
  //       background-color: #fff;
  //     }

  //     .footer {
  //       margin-top: 10px;
  //       color: #fff;
  //       i {
  //         font-size: 1.5rem;
  //         cursor: pointer;
  //       }
  //     }
  //   }
  // }

  // &__message {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   background-color: rgba(#000, 0.7);
  //   color: #fff;
  //   text-align: center;
  //   padding: 7px 25px;
  //   border-radius: 50px;
  //   font-size: 1rem;
  //   line-height: 1.5;
  //   white-space: nowrap;
  //   opacity: 0;
  //   z-index: 404;
  //   transition: opacity 0.5s;
  //   pointer-events: none;
  //   &.is-active {
  //     opacity: 1;
  //   }
  // }
  &__city-box,
  &__types-box {
    z-index: 999;
    .name {
      @include respond-to(sm) {
        width: 20%;
        line-height: normal;
      }
    }
    .formitem select {
      background: none;
    }
    .formitem-m {
      position: fixed;
      top: 85px;
      right: 10px;
      background-color: #fff;
      padding: 0.2rem 0.5rem;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
      z-index: 9999;
    }
    .type-box-m {
      right: 30px;
    }
    .btn-city,
    .btn-types {
      z-index: 1000;
      position: relative;
      background-color: #fff;
      border-radius: 50px;
      border: 1px solid #ddd;
      color: #cc2f2d;
      padding: 2px 20px;
      font-size: 1rem;
      cursor: pointer;
      min-width: max-content;
      text-align: center;
      margin-left: 0.5rem;
      @include respond-to(sm) {
        font-size: 13px;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
    }
  }
  .message-box {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
// ::v-deep {
//   .store-info {
//     .info {
//       margin-bottom: 15px;
//     }
//     .name {
//       font-size: 14px;
//       font-weight: bold;
//     }
//     .branchName {
//       color: #666;
//       font-size: 13px;
//       margin-left: 5px;
//     }
//     img {
//       width: 100%;
//     }
//     .more {
//       margin-top: 10px;
//     }
//   }

//   .leaflet-control-attribution {
//     white-space: nowrap;
//   }
// }
</style>
