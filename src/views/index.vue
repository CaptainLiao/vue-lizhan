<template>
  <div class="main">
    <headHome></headHome>
    
      <tabNav :list="nav" class="head-nav">
        <div class="main-wrap" slot="tab0">
          <div class="main-banner">
            <img src="../assets/images/1.jpg" alt="">
            <img src="../assets/images/1.jpg" alt="">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="main-banner">
            <img src="../assets/images/1.jpg" alt="">
            <img src="../assets/images/1.jpg" alt="">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="main-nav">
            <iconList :iconList="mainNavs"></iconList>
          </div>

          <div class="main-ad">
            <img src="../assets/logo.png" alt="">
          </div>
          
          <div class="main-content">
            <tabSwitch :list="contentTab">
              
            </tabSwitch>
          </div>
        </div>
      </tabNav>

    <footBottom></footBottom>
  </div>
</template>

<script>
  import headHome from '../components/header/headHome'
  import footBottom from '../components/footer/footer'
  import tabNav from '../components/tabSwitch/tab.vue'
  import iconList from '../components/iconList.vue'
  import tabSwitch from '../components/tab.vue'
  export default {
    data() {
      return {
        nav: [
          '首页推荐',
          '华博',
          '智能生活',
          '节日优选',
          '设计范儿',
        ],
        mainNavs: [
          {
            icon: '&#xe608;',
            text: '礼品库'
          },{
            icon: '&#xe621;',
            text: '供应商'
          },{
            icon: '&#xe63d;',
            text: '代理群'
          },{
            icon: '&#xe600;',
            text: '展会'
          },
        ],
        contentTab: ['热门推荐', '礼品攻略']
      }
    },

    created() {

    },
    components: {
      headHome,
      footBottom,
      tabNav,
      tabSwitch,
      iconList
    }
  }
</script>


<style scoped lang="less">
  .main {
    width: 100%;
    height: 100%;
  }
  .main-wrap {
    padding-bottom: 54px;
  }
  .head-nav {
    padding-top: 50px;
  }
  .main-banner {
    display: flex;
    align-item: center;
    margin-top: 1px;
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
      flex-grow: 1;
      width: 100%;
      max-width: 100%;
    }
  }
  .main-nav {
    padding: 16px 0;
    background-color: #fff;
    
    .icon-list a span {
      font-size: 22px;
    }
  }

  .main-ad {
    margin-top: 10px;
    width: 100%;
    height: 80px;
    background-color: #fff;
    overflow: hidden;

    img {
      width: 100%;
      max-width: 100%;
    }
  }

  .main-content {
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }
</style>
