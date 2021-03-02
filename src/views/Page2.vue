<!--
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-02 22:29:16
 * @FilePath     : /douban250/src/views/Page2.vue
-->
<template>
  <div class="home">
    <div class="">Page 2</div>
    <type-count-2000></type-count-2000>
    <line-score-2000></line-score-2000>
    <ten-years-count></ten-years-count>
    <china-year-count></china-year-count>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import list from '@/db/list';
import TypeCount2000 from '@/components/charts/TypeCount2000.vue';
import LineScore2000 from '@/components/charts/LineScore2000.vue';
import TenYearsCount from '@/components/charts/TenYearsCount.vue';
import ChinaYearCount from '@/components/charts/ChinaYearCount.vue';

export default {
  name: 'Home',
  components: {
    TypeCount2000,
    LineScore2000,
    TenYearsCount,
    ChinaYearCount
  },
  data() {
    return {

    };
  },
};
</script>
