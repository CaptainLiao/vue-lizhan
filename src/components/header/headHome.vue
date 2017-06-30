<template>
  <header class="header">
    <div class="head-left home-logo"></div>
    <div class="head-center home-search"><span class="iconfont">&#xe61d;</span>搜索礼品、供应商、攻略</div>
    <div class="head-right home-car iconfont">&#xe790;</div>
  </header>
</template>

<style lang="less">
  @import "../../assets/style/layout.less";
  .header {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: @max-width;
    height: @headHeight;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    z-index: 99;
  }
</style>
<style scoped lang="less">
  @import "../../assets/style/layout.less";
  header div {

    text-align: center;
  }
  .home-logo{
    width: 60px;
    height: 100%;
    line-height: @headHeight;
    margin: 0 1rem;
    background: url("../../assets/images/home_logo.png") no-repeat center;
    background-size: 100%;
  }
  .home-car {
    line-height: @headHeight;
    margin: 0 1rem;
    font-size: 22px;
  }
  .home-search {
    flex-grow: 1;
    flex-shrink: 1;
    line-height: 32px;
    font-size: 14px;
    color: #999;
    border-radius: 20px;
    border: 1px solid #f9f4f7;
    background-color: #f9f4f7;

    span {
      padding-right: 6px;
      font-size: 14px;
      color: #999;
    }
  }

</style>
