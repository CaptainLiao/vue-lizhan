<template>
  <div class="main">
    <headHome></headHome>
    <div class="head-nav">
      <tabSwitch :list="nav"></tabSwitch>
    </div>
    <footBottom></footBottom>
  </div>
</template>

<script>
  import headHome from '../components/header/headHome'
  import footBottom from '../components/footer/footer'
  import tabSwitch from '../components/tabSwitch/tab.vue'
  export default {
    data() {
      return {
        nav: [
          '首页推荐',
          '华博',
          '智能生活',
          '节日优选',
          '设计范儿',
        ]
      }
    },

    created() {

    },
    components: {
      headHome,
      footBottom,
      tabSwitch
    }
  }
</script>


<style scoped lang="less">
  .head-nav {
    padding-top: 50px;
  }
</style>
