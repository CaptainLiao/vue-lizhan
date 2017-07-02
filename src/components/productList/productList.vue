<!-- 商品列表 -->
<template>
  <div class="product-list clearfix">
      <div
        class="product-item"
        v-for="item in list"
        :id="item.id"
      >
        <div class="product-img">
          <img src="../../assets/logo.png" alt="">
        </div>
        
        <h4 class="product-title">
          爆款T2血压手环智能运动心率血氧睡眠监测计步防水计步器蓝牙手环
        </h4>
        <div class="product-detail">
          <p>$499.00</p>
          <p>起批量1件</p>
        </div>
      </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    props: {
     list: Array
    }
  }
</script>

<style type="text/css" scoped lang="less">
  .product-item {
    width: 50%;
    padding: 4px;
    float: left;

  }
  .product-detail {
    display: flex;
    justify-content: space-around;
  }
</style>
