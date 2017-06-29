<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>吃饭了</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import './assets/style/common.less';
  #app {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    background-color: #ccc;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    p {
      font-size: 1.6rem;
    }
  }
</style>
