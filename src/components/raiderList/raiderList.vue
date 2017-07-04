<!-- 攻略列表组件 -->

<template>
    <ul class="raiders">

        <li class="raider-item" v-for="item in list">
            <a href="javascript:">
                <div class="product-img">
                  <img :src="host + item.coverImg"  alt="">
                </div>
                <h4 class="raider-title">{{item.mainTheme}}</h4>
                <p class="raider-descript">{{item.mainDescribeTxt}}</p>
                <div class="raider-pannel">
                    <div class="raider-pannel-left">
                        <span>栏目：</span>{{item.mainColumn}}
                    </div>
                    <div class="raider-pannel-right">
                        <p><span>眼睛</span>{{item.browseCount}}</p>
                        <p><span>心</span>{{item.storageCount}}</p>
                    </div>
                </div>
            </a>
        </li>
        <p class="load-more" v-show="showMore" @click="loadMoreRaiders">加载更多...</p>
    </ul>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        host: 'http://oms.reedhuabo.com',
        list: [],
        page: 1,
        showMore: false,
      }
    },
    props: {
     //list: Array
     url: {
        type: String,
        default: ''
     }
    },

    mounted() {
      this.getData();
    },
    watch: {
      // 通过接受上层组件来的 api-url 决定是否获取数据
      url() {
        console.log(this.url)
        if(this.url) {

          this.timer = null;
          this.timer = setTimeout(() => {
            this.getData();
          }, 0)
        }
      }
    },

    methods: {
      getData() {
        var _this = this;
        var url = this.url;
        var page = this.page;
        var params = { page };

        if(!url) {
          return
        }

        _this.$get(url, params)
          .then(res => {
            let data = res.value;
            let dataList = data.raiders;
            _this.loading = false;

            if(dataList) {

              if(dataList.length < 20) {
                _this.$data.showMore = false;
              }else {
                _this.$data.showMore = true;
              }

              if(this.timer) {
                _this.$data.list = dataList;
              }else {
                _this.$data.list.push(...dataList);
              }

            }
          })
      },

      loadMoreRaiders() {
        let page = this.page;
        this.timer = null;
        if(this.loading) return;

        this.$data.page = ++page;
        this.getData();
      }
    }
  }
</script>

<style type="text/css" lang="less" scoped>

  .raider-item {
    margin-bottom: 10px;
    a {
      display: block;
      padding: 8px;
      background-color: #fff;
    }
  }
  .product-img {
    border-top-left-radius: 6px;
  }
  .raider-title {
    padding: 10px 0;
    line-height: 1.8;
    font-size: 16px;
    font-weight: 900;

  }
  .raider-descript {
    margin-bottom: 12px;
    font-weight: normal;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
    height: 45px;
    line-height: 24px;
    color: #999;
  }
  .raider-pannel {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-top: 1px solid #ccc;
  }
  .raider-pannel-left {
    span {
      color: #999;
    }
  }
  .raider-pannel-right {
    p {
      display: inline-block;
      span {
        padding-right: 6px;
      }
    }
    p:nth-of-type(1) {
      padding-right: 10px;

    }
  }

  .load-more {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
</style>
