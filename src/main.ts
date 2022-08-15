// import { createApp } from 'vue';
import Vue from 'vue';
import VueReStoreList from './VueReStoreList.vue';
import demo from './demo.vue';
import './assets/css/re-web-font.css';

// 其他組件可放這
const components: any = [
  VueReStoreList
];

function install(useVue: any) {
  // if (install.installed) return;
  const keys = Object.keys(components);
  keys.forEach(name => {
    const component = components[name];
    useVue.component(component.name || name, component);
  });
  // if (typeof window != 'undefined' && (window).Vue) {
  //   install((window).Vue);
  // }
}

if (process.env.NODE_ENV === 'development') {
  // Vue 2
  new Vue({
    render: h => h(demo),
  }).$mount('#app');
  // Vue 3
  // const app = createApp(Demo);
  // app.mount('#app');
}

export {
  install,
  VueReStoreList
};
