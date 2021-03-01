<!--
 * @Date         : 2021-02-28 22:18:29
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-01 21:54:03
 * @FilePath     : /douban250/src/components/charts/LineScore2000.vue
-->
<template>
  <div id="line-score-2000"></div>
</template>

<script>
import renderList from '@/db/scoreAfter2000';

export default {
  data() {
    return {
      renderList: renderList.sort((a, b) => {
        a = +a.score
        b = +b.score
        return a-b
      }),
    };
  },
  mounted() {
    const ref = document.getElementById('line-score-2000');
    const myChart = echarts.init(ref);

    const option = {
        xAxis: {
            type: 'category',
            data: this.renderList.map(item => item.year)
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['评分']
        },
        title: {
            text: '2000年后，每一年及其平均分折线图',
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '评分',
            data: this.renderList.map(item => item.score),
            type: 'line'
        }]
    };
    myChart.setOption(option);
  },
};
</script>

<style>
#line-score-2000{
  width: 1000px;
  height: 600px;
  margin: 20px auto;
}
</style>