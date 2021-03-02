<!--
 * @Date         : 2021-03-02 21:17:49
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-02 22:32:24
 * @FilePath     : /douban250/src/components/charts/ChinaYearCount.vue
-->
<template>
  <div id="china-year-count"></div>
</template>

<script>
import renderList from '@/db/chinaYearCount';

export default {
  data() {
    return {
      renderList,
    };
  },
  mounted() {
    const ref = document.getElementById('china-year-count');
    const myChart = echarts.init(ref);

    const option = {
        title: {
            text: '国产的电影年份与数量',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type:'category',
            data: this.renderList.map(item => item.year)
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                type: 'bar',
                data: this.renderList.map(item => item.count)
            }
        ]
    };
    myChart.setOption(option);
  },
};
</script>

<style>
#china-year-count{
  width: 1000px;
  height: 600px;
  margin: 20px auto;
}
</style>