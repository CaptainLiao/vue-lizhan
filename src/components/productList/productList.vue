<!-- 商品列表 -->
<template>
  <div class="product-list clearfix">
      <div
        class="product-item"
        v-for="item in list"
      >
        <a href="javascript:" :id="item.id">
            <div class="product-img">
              <img :src="host + item.images[0]" alt="">
            </div>
            
            <h4 class="product-title">
              {{item.name}}
            </h4>
            <div class="product-detail">
              <p class="pd-item1">${{(item.price / 100).toFixed(2)}}</p>
              <p class="pd-item2" >起批量{{item.lowAmount}}件</p>
            </div>
        </a>
      </div>
      <p class="load-more" v-show="showMore" @click="loadMore">加载更多...</p>
  </div>
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
    methods: {
      getData() {
        var _this = this;
        var url = this.url;
        var page = this.page;
        var params = { page };
        
        if(!url) return;
        _this.$get(url, params)
          .then(res => {
            let data = res.value;
            let dataList = data.productMapList;

            if(dataList) {
              if(dataList.length < 20) {
                _this.loading = true;
                _this.$data.showMore = false;
              }else {
                _this.$data.showMore = true;
              }
              _this.$data.list.push(...dataList);
            }
          })
      },

      loadMore() {
        let page = this.page;
        console.log(this.loading)
        if(this.loading) return;

        this.$data.page = ++page;
        this.getData();
      }
    }
  }
</script>

<style type="text/css" scoped lang="less">
  @import url('../../assets/style/layout.less');

  .product-item {
    float: left;
    width: 50%;
    padding: 8px;
    padding-top: 0;
    border-radius: 6px;

    a {
        display: block;
        border-radius: 8px;
        background-color: #fff;
        padding: 8px;

    }
    
    .product-title {
      font-weight: normal;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
      height: 45px;
      line-height: 24px;
    }

    .product-detail {
      padding-top: 8px;
      display: flex;
      justify-content: space-between;

      .pd-item1 {
        color: @red;
      }

      .pd-item2 {
        color: #999;
        font-size: 12px;
      }
    }

  }
  .product-item:nth-of-type(even) {
    padding-left: 4px;
  }
    .product-item:nth-of-type(odd) {
    padding-right: 4px;
  }

  .load-more {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

</style>
