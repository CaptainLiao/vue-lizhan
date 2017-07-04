<template>
  <div class="main">
    <headHome></headHome>

    <tabNav :list="navMenu"
            class="head-nav"
            @switchNav="switchIndexContent"
            :url="indexRaidersApi"
    >

    </tabNav>

    <keep-alive>
      <component v-bind:is="currentView" v-bind:url="indexRaidersApi">

      </component>
    </keep-alive>


    <!--<keep-alive>-->
      <!--<component v-bind:is="currentView">-->
        <!--<raiderList></raiderList>-->
      <!--</component>-->
    <!--</keep-alive>-->



    <footBottom></footBottom>
  </div>
</template>

<script>

  import headHome from '../components/header/headHome'
  import footBottom from '../components/footer/footer'
  import tabNav from '../components/tabSwitch/tab.vue'
  import raiderList from '../components/raiderList/raiderList.vue'
  import indexContent from '../components/index/index-content.vue'

  export default {
    data() {
      return {
        navMenu: [],
        indexRaidersApi: '',
        currentView: 'indexContent'
      }
    },

    created() {
      var _this = this;
      var indexRaiders = this.config.getApi('indexRaiders');

      _this.$get(_this.config.getApi('raidersClumn'))
        .then(res => {
          let data = res.value;
          let columns = data.columns;
          _this.$data.navMenu = columns;


        })
    },

    methods: {
      switchIndexContent(id) {
        let curId = +id;
        console.log(curId)
        if(curId !== 1) {
          this.$data.currentView = 'raiderList';
          this.$data.indexRaidersApi = this.config.getApi('indexRaiders') +'?id=' +id;
        }else {
          this.$data.currentView = 'indexContent'
        }
      }
    },

    components: {
      headHome,
      footBottom,
      tabNav,
      indexContent,
      raiderList,
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

</style>
