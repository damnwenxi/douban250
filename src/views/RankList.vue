<!--
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-27 17:33:05
 * @FilePath     : /douban250/src/views/RankList.vue
-->
<template>
  <div class="rank-list">
    <div class="filter-bar">
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button>
    </div>

    <el-table :border="true" :data="renderList">
      <el-table-column prop="rank" label="排名" width="80"></el-table-column>
      <el-table-column label="电影海报" width="180">
        <template slot-scope="scope">
          <!-- <span>{{scope.row.cover}}</span> -->
          <img class="cover" :src="scope.row.cover" />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="电影名称"></el-table-column>
      <el-table-column prop="category" label="类型"></el-table-column>
      <el-table-column prop="score" label="评分"></el-table-column>
      <el-table-column
        prop="year"
        label="上映时间"
        :filters="filterOptions"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="country" label="上映地点"></el-table-column>
      <el-table-column prop="director" label="导演"></el-table-column>
      <el-table-column prop="actor" label="主演"></el-table-column>
      <el-table-column prop="quote" label="格言"></el-table-column>
    </el-table>

    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="movieList.length"
      @current-change="handlePageChange"
    ></el-pagination>
  </div>
</template>

<script>
import list from '@/db/list';

export default {
  name: 'rankList',
  components: {},
  data() {
    return {
      movieList: list,
      pageOptions: {
        page: 0,
        size: 10,
      },
      filterOptions: [
        { text: '2020以后', value: '2020-9999' },
        { text: '2010-2020', value: '2010-2020' },
        { text: '2000-2010', value: '2000-2010' },
        { text: '1990-2000', value: '1990-2000' },
      ],
    };
  },
  computed: {
    renderList() {
      return this.movieList.slice(
        this.pageOptions.page * 10,
        (this.pageOptions.page + 1) * 10,
      );
    },
  },
  methods: {
    handlePageChange(page) {
      this.pageOptions.page = page - 1;
    },
    filterHandler(value, row) {
      const startAt = +value.split('-')[0];
      const endAt = +value.split('-')[1];

      return row.year >= startAt && row.year <= endAt;
    },
    resetDateFilter() {},
    clearFilter() {},
  },
};
</script>

<style lang="scss" scoped>
.rank-list {
  .cover {
    width: 100%;
  }

  .filter-bar {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
    box-sizing: border-box;
  }

  .pager {
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    height: 40px;
  }
}
</style>
