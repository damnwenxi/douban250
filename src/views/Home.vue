<!--
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-27 22:18:33
 * @FilePath     : /douban250/src/views/Home.vue
-->
<template>
  <div class="home">
    <div class="">home</div>
    <movie-type></movie-type>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import list from '@/db/list';
import MovieType from '@/components/charts/MovieType.vue';

export default {
  name: 'Home',
  components: {
    MovieType,
  },
  data() {
    return {

    };
  },
};
</script>
