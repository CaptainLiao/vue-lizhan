<template>
  <div class="main-wrap">

    <swiperImage :list="imageList"></swiperImage>

    <div class="main-nav">
      <iconList :iconList="mainNavs"></iconList>
    </div>

    <div class="main-ad product-img ">
      <img src="../../assets/logo.png" alt="">
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
</template>

<script>
  import swiperImage from '../imageGroup/swiper.vue'
  import iconList from '../iconList.vue'
  import tabSwitch from '../tab.vue'
  import productiList from '../productList/productList.vue'
  import raiderList from '../raiderList/raiderList.vue'
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
        imageList: [],

      }
    },

    created() {
      let _this = this;
      let indexUrl = this.config.getApi('index');
      this.$data.productListUrl = indexUrl;
      _this.$get(indexUrl)
        .then(res => {
          let data = res.value;
          let imageList = data.imgUrlList;
          if(imageList) {
            _this.imageList = imageList;
          }
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
      swiperImage,
      tabSwitch,
      iconList,
      productiList,
      raiderList
    }
  }
</script>

<style lang="less" scoped>
  .main-wrap {
    /*padding-bottom: 54px;*/
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

  }
</style>
