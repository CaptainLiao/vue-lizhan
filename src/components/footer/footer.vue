<template>
  <footer class="footer">
    <ul>
      <li><a class="nav-home li-on" href="#"><span class="iconfont">&#xe605;</span>首页</a></li>
      <li><a class="nav-demand" href="#"><span class="iconfont">&#xe606;</span>需求</a></li>
      <li><a class="nav-send" href="#"><span class="iconfont">&#xe760;</span>发布</a></li>
      <li><a class="nav-user" href="#"><span class="iconfont">&#xe603;</span>我的</a></li>
    </ul>
  </footer>
</template>

<style lang="less" scoped>
  @import "../../assets/style/layout.less";
  .footer {
    position: fixed;
    bottom: 0;

    width: 100%;
    max-width: @max-width;
    height: 54px;
    font-size: 14px;
    background-color: #fff;
    z-index: 99;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }

    .li-on span {
      color: @red;
    }
    a {
      display: block;
    }
    a span {
      display: block;
      text-align: center;
      margin: 0 auto;

      font-size: 18px;

    }

    .nav-home span{

    }

    .nav-demand span{

    }

    .nav-send span{

    }
    .nav-user span{

    }


  }
</style>
