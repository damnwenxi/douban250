<!--
 * @Date         : 2021-02-28 22:18:29
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-03-01 21:19:39
 * @FilePath     : /douban250/src/components/charts/TypeCount2000.vue
-->
<template>
  <div id="type-count-pie"></div>
</template>

<script>
import renderList from '@/db/after2000';
import typeList from '@/db/types';

export default {
  data() {
    return {
      renderList,
      typeList
    };
  },
  mounted() {
    const ref = document.getElementById('type-count-pie');
    const myChart = echarts.init(ref);

    const option = {
        legend: {
            top: 'bottom'
        },
        title: {
            text: '2000年后类型占比基础南丁格尔玫瑰图',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a}: {c} ({d}%)'
        },
        series: [
            {
                name: '数量',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: this.renderList
            }
        ]
    };
    myChart.setOption(option);
  },
};
</script>

<style>
#type-count-pie{
  width: 1000px;
  height: 600px;
  margin: 20px auto;
}
</style>