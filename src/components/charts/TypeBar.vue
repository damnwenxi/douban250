<!--
 * @Date         : 2021-02-28 22:18:29
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-28 22:22:30
 * @FilePath     : /douban250/src/components/charts/TypeBar.vue
-->
<template>
  <div id="type-bar"></div>
</template>

<script>
import renderList from '@/db/typeCount';
import typeList from '@/db/types';

export default {
  data() {
    return {
      renderList,
      typeList
    };
  },
  mounted() {
    const ref = document.getElementById('type-bar');
    const myChart = echarts.init(ref);

    const option = {
        title: {
            text: '各类型数量条形图',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: this.typeList
        },
        series: [
            {
                type: 'bar',
                data: this.renderList
            }
        ]
    };
    myChart.setOption(option);
  },
};
</script>

<style>
#type-bar{
  width: 1000px;
  height: 600px;
  margin: 20px auto;
}
</style>