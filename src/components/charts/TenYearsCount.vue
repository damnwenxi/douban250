<!--
 * @Date         : 2021-03-02 21:17:49
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-02 22:31:20
 * @FilePath     : /douban250/src/components/charts/TenYearsCount.vue
-->
<template>
  <div id="ten-years-count"></div>
</template>

<script>
import renderList from '@/db/tenYearsCount';

export default {
  data() {
    return {
      renderList,
    };
  },
  mounted() {
    const ref = document.getElementById('ten-years-count');
    const myChart = echarts.init(ref);

    const option = {
        title: {
            text: '年份与其数量',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: this.renderList.map(item => item.label)
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
#ten-years-count{
  width: 1000px;
  height: 600px;
  margin: 20px auto;
}
</style>