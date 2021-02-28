<!--
 * @Date         : 2021-02-27 21:34:20
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-28 21:46:28
 * @FilePath     : /douban250/src/components/charts/MovieType.vue
-->
<template>
  <div id="movie-type"></div>
</template>

<script>
import yearList from '@/db/years';
import typeList from '@/db/types';
import renderList from '@/db/countYearAndTypes';

export default {
  data() {
    return {
      yearList,
      typeList,
      renderList,
    };
  },
  mounted() {
    const ref = document.getElementById('movie-type');
    const myChart = echarts.init(ref);

    const option = {
      title: {
        text: '电影类型随时间变化',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 60,
        height: 450,
        bottom: 100,
        data: this.typeList
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.yearList,
      },
      yAxis: {
        type: 'value',
      },
      series: this.renderList,
    };
    myChart.setOption(option);
  },
};
</script>

<style>

#movie-type{
  width: 1000px;
  height: 600px;

  margin: 0 auto;
}
</style>