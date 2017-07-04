<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
  import footBottom from './components/footer/footer'
  export default {

    name: 'app',
    components: {
      footBottom
    }
  }
</script>

<style lang="less">
  @import './assets/style/common.less';
  @import './assets/style/layout.less';
  #app {
    width: 100%;
    max-width: @max-width;
    height: 100%;
    margin: 0 auto;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


  }
</style>
