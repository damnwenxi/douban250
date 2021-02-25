/*
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-25 22:13:06
 * @FilePath     : /douban250/src/main.js
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
