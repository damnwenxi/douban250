<!--
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-25 22:19:16
 * @FilePath     : /douban250/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-table :data="movieList">
      <el-table-column prop="rank" label="排名" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import list from '@/db/list';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      movieList: list,
    };
  },
};
</script>
