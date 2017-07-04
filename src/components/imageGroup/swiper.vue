<template>
  <div class="fui-banner">
    <div class="fui-banner-item" v-for="item in list">
      <img :src="host + item.url" alt="">
    </div>

    <!--<img src="../../assets/images/1.jpg" alt="">-->
    <!--<img src="../../assets/images/1.jpg" alt="">-->
    <!--<img src="../../assets/logo.png" alt="">-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        host: this.$host,
      }
    },
    props: {
      list: Array,
    }
  }
</script>

<style lang="less" scoped>
  .fui-banner {
    display: flex;
    align-item: center;
    margin-top: 1px;
    width: 100%;
    height: 200px;
    overflow: hidden;

  }
  .fui-banner-item {
    flex-shrink: 0;
    width: 100%;
  img {

    width: 100%;
    max-width: 100%;
  }
  }
</style>

