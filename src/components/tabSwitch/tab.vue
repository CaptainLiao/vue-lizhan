<template>
  <div class="fui-tab">
    <div class="fui-tab-head">
      <a href="javascript:">首页推荐</a>
      <a href="javascript:">划拨严选</a>
      <a href="javascript:">智能生活</a>
      <a href="javascript:">节日优选</a>
      <a href="javascript:">设计范儿</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

  }
</script>

<style lang="less" scoped>
  .fui-tab {
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 14px;
    background-color: #fff;
    overflow: hidden;
  }

  .fui-tab-head {
    position: absolute;
    top: 0;
    left: -120px;
    white-space: nowrap;
    line-height: 50px;
    a {
      display: inline-block;
      padding: 0 12px;
    }
  }
</style>
