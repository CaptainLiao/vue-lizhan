<template>
  <div class="main">
    <headHome></headHome>

      <tabNav :list="navMenu"
              class="head-nav"
              @switchNav="getRaidersById"
              :raidersUrl="oIndexRaiders"
      >
        <div class="main-wrap" slot="tab0">
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
            <tabSwitch :list="contentTab" @switchTab="getData">
              <div class="tab_0" slot="tab_0">
                <productiList :url="productListUrl"></productiList>
              </div>
              <div class="tab_1" slot="tab_1" >
                <raiderList :url="indexRaiders"></raiderList>
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
  import raiderList from '../components/raiderList/raiderList.vue'
  export default {
    data() {
      return {
        navMenu: [],
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
        productListUrl: '',
        indexRaiders: '',

      }
    },

    created() {
      this.$data.productListUrl = this.config.getApi('index');
      var _this = this;
      var indexRaiders = this.config.getApi('indexRaiders');
      var params = {
        page: 2
      };

      _this.$get(_this.config.getApi('raidersClumn'))
        .then(res => {
          let data = res.value;
          let columns = data.columns;
          _this.$data.navMenu = columns;

        })
    },

    methods: {
      // $on 监听子组件的 switchTab 事件，执行getData方法
      getData(index) {
        if(+index === 1) {
          // 首页礼品攻略
          this.$data.indexRaiders = this.config.getApi('indexRaiders') + "?id=1";
        }
      },

    },

    components: {
      headHome,
      footBottom,
      tabNav,
      tabSwitch,
      iconList,
      productiList,
      raiderList
    }
  }
</script>


<style scoped lang="less">
  .main {
    width: 100%;
    height: 100%;
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
    margin-top: 10px;
  }

  .main-content {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    .tab_0 ,
    .tab_1 {
      padding-top: 10px;
    }

    .fui-tab-bd {
      background-color: #f7f7f7;
    }
  }
</style>
