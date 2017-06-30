<template>
  <div id="app">
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
  @import './assets/style/layout.less';
  #app {
    width: 100%;
    max-width: @max-width;
    margin: 0 auto;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    p {
      font-size: 1.6rem;
    }
  }
</style>
