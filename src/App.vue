<!--
 * @Date         : 2021-02-25 22:06:06
 * @Author       : kefeng
 * @LastEditors  : kefeng
 * @LastEditTime : 2021-02-27 17:08:00
 * @FilePath     : /douban250/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        Movies Analyzer
      </div>
      <router-link class="nav-item" to="/">首页</router-link> |
      <router-link class="nav-item" to="/rank">豆瓣250</router-link>

      <div class="date-time">
        <a href="https://time.is/Beijing" id="time_is_link" rel="nofollow" style="font-size:20px">北京时间:</a>
        <span id="Beijing_z43d" style="font-size:20px"></span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
  background: rgb(111, 119, 174);
  position: relative;
  box-sizing: border-box;

  .logo {
    font-size: 900;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 24px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .date-time {
    right: 24px;
    position: absolute;
    display: flex;
    height: 60px;
    font-size: 16px;

    a {
      font-size: 16px !important;
      text-decoration: none;
    }

    span {
      display: flex;
      align-items: center;
      font-size: 16px !important;

      span {
        margin: 0 12px;
      }
    }
  }
}
</style>
