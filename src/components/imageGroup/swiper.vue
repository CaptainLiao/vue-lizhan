<template>
  <div class="fui-banner">

    <div class="fui-banner-wrap"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd"
         :style="{transform}"
         ref="swipeArea"
    >
      <div class="fui-banner-item" v-for="item in list">
        <img :src="host + item.url" alt="">
      </div>
      <!--<div class="fui-banner-item">-->
        <!--<img src="../../assets/images/1.jpg" alt="">-->
      <!--</div>-->
      <!--<div class="fui-banner-item">-->
        <!--<img src="../../assets/logo.png" alt="">-->
      <!--</div>-->
      <!--<div class="fui-banner-item">-->
        <!--<img src="../../assets/images/1.jpg" alt="">-->
      <!--</div>-->

    </div>
    <ul class="fui-circle" v-if="showCircle">
      <li v-for="item,index in list">
        <span class="fui-circle-item" :class="(index === next) ? 'li-on' : ''"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        host: this.$host,

        // 图片轮播参数
        clientWidth: 0,
        imgLen: '',
        startX: 0,
        offsetLeft: 0,
        transform: '',
        next:0,
      }
    },
    props: {
      list: Array,
      showCircle: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      list() {
        let length = this.list.length;
        if(length > 0) {
          this.imgLen = length;
        }
      }
    },
    mounted() {
      let clientWidth = document.documentElement.clientWidth;

      this.clientWidth = clientWidth;
    },

    methods: {
      touchStart(e) {
        let startX = e.changedTouches[0].clientX;

        this.startX = startX;
        this.offsetLeft = startX - this.offsetLeft;
      },
      touchMove(e) {
        let _this = this;
        let offsetLeft = _this.offsetLeft;
        let moveX = e.changedTouches[0].clientX;
        let offsetX = moveX - offsetLeft;

        _this.transform = 'translateX('+offsetX+'px)';
      },
      touchEnd(e) {
        let _this = this;
        let startX = _this.startX;
        let endX = e.changedTouches[0].clientX;
        let offsetX = endX - startX;
        _this.touchEnded(offsetX);
      },

      touchEnded(offsetX) {
        let clientWidth = this.clientWidth;
        let index = this.next;
        let imgLen = this.imgLen;

        console.log(imgLen)

        if(Math.abs(offsetX) > clientWidth / 3) {
          if(offsetX > 0) { // 右滑动

             --index;
            if(index <= 0) index = 0;
            offsetX = -clientWidth * index;
            this.next = index;

          }else { // 左滑动
            ++index;
            if(index >= imgLen) index = imgLen - 1;
            offsetX = -clientWidth * index;
            this.next = index;
          }
        } else {
          offsetX = -clientWidth * index;
        }
        console.log(offsetX);
        this.transform = 'translateX('+offsetX+'px)';
        this.offsetLeft = offsetX;
      },
    }
  }
</script>

<style lang="less" scoped>
  .fui-banner {
    position: relative;
    margin-top: 1px;
    width: 100%;
    height: 200px;
    overflow: hidden;

  }
  .fui-banner-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-item: center;

  }
  .fui-banner-item {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      max-width: 100%;
      min-height: 100%;
    }
  }
  .fui-circle {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;

    display: flex;
  }
  .fui-circle-item {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 100%;
    margin-left: 8px;
  }
  .li-on {
    background-color: #e4007f;
  }
</style>

