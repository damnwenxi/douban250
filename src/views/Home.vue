<!--
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-28 22:22:08
 * @FilePath     : /douban250/src/views/Home.vue
-->
<template>
  <div class="home">
    <div class="">home</div>
    <movie-type></movie-type>
    <director-pie></director-pie>
    <type-bar></type-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import list from '@/db/list';
import MovieType from '@/components/charts/MovieType.vue';
import DirectorPie from '@/components/charts/DirectorPie.vue';
import TypeBar from '@/components/charts/TypeBar.vue';

export default {
  name: 'Home',
  components: {
    MovieType,
    DirectorPie,
    TypeBar
  },
  data() {
    return {

    };
  },
};
</script>
