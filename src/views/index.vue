<template>
  <div class="main">
    <headHome></headHome>
    <div class="head-nav">
      <tabSwitch></tabSwitch>
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
