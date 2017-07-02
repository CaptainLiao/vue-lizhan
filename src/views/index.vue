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

          <div class="main-ad product-img ">
            <img src="../assets/logo.png" alt="">
          </div>
          
          <div class="main-content">
            <tabSwitch :list="contentTab">
              <div class="tab_0" slot="tab_0">
                <productiList :list="productiList"></productiList>
              </div>
              <div class="tab_1" slot="tab_1">
                <productiList :list="productiList2"></productiList>
              </div>
            </tabSwitch>
          </div>
        </div>
      </tabNav>


  </div>
</template>

<script>
  import headHome from '../components/header/headHome'
  import footBottom from '../components/footer/footer'
  import tabNav from '../components/tabSwitch/tab.vue'
  import iconList from '../components/iconList.vue'
  import tabSwitch from '../components/tab.vue'
  import productiList from '../components/productList/productList.vue'
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
        contentTab: ['热门推荐', '礼品攻略'],
        productiList: ['热门推荐', '礼品攻略'],
        productiList2: ['热门推荐'],

      }
    },

    created() {
      var _this = this;
      var params = {
        page: 2
      };
      _this.$get(_this.config.getApi('index'), params)
        .then(res => {
          console.log(1)
        })
    },
    components: {
      headHome,
      footBottom,
      tabNav,
      tabSwitch,
      iconList,
      productiList
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
    height: 80px;
  }

  .main-content {
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }
</style>
