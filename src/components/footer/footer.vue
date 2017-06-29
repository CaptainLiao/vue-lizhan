<template>
  <footer class="footer">
    <ul>
      <li><a class="nav-home li-on" href="#"><span></span>首页</a></li>
      <li><a class="nav-demand" href="#"><span></span>需求</a></li>
      <li><a class="nav-send" href="#"><span></span>发布</a></li>
      <li><a class="nav-user" href="#"><span></span>我的</a></li>
    </ul>
  </footer>
</template>

<style lang="less" scoped>
  .footer {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 54px;
    background-color: #fff;
    z-index: 99;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }

    .li-on span {
      background: url(../../assets/images/nav_icon_ch.png) no-repeat;
      background-size: 278px 22px;
    }
    a {
      display: block;
    }
    a span {
      width: 2rem;
      height: 2rem;
      display: block;
      text-align: center;
      margin: 0 auto;
      background: url(../../assets/images/nav_icon_no.png) no-repeat;
      background-size: 278px 22px;
    }

    .nav-home span{
      background-position: left;
    }

    .nav-demand span{
      background-position: -65px 0;
    }

    .nav-send span{
      background-position: -128px 0;
    }
    .nav-user span{
      background-position: right;
    }


  }
</style>
