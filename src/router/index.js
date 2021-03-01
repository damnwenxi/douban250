/*
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-01 21:15:41
 * @FilePath     : /douban250/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/2',
    name: 'Page2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page2.vue'),
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import(/* webpackChunkName: "about" */ '../views/RankList.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
