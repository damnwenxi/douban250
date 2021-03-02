<!--
 * @Date         : 2021-02-28 21:53:00
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-28 22:02:55
 * @FilePath     : /douban250/src/components/charts/DirectorPie.vue
-->
<template>
  <div id="country-pie"></div>
</template>

<script>
import renderList from '@/db/countryPie';

export default {
  data() {
    return {
      renderList,
    };
  },
  mounted() {
    const ref = document.getElementById('country-pie');
    const myChart = echarts.init(ref);

    const option = {
        title: {
            text: '电影的国家或地区占比',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
          {
              name: '电影数量',
              type: 'pie',
              radius: ['40%', '70%'],
              data: this.renderList,
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    };
    myChart.setOption(option);
  },
};
</script>

<style>
#country-pie{
  width: 1000px;
  height: 600px;
  margin: 20px auto;
}
</style>