<template>
  <div class="fui-banner">

    <div class="fui-banner-wrap"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd"
         :style="{transform}"
         ref="swipeArea"
    >
      <div class="fui-banner-item">
        <img src="http://oms.reedhuabo.com/uploads/ad/20170630/004580.jpg" alt="">
      </div>
      <div class="fui-banner-item" v-for="item in list">
        <img :src="host + item.url" alt="">
      </div>

      <div class="fui-banner-item">
        <img src="http://oms.reedhuabo.com/uploads/ad/20170704/004586.jpg" alt="">
      </div>
      <!--<div class="fui-banner-item">-->
        <!--<img src="../../assets/logo.png" alt="">-->
      <!--</div>-->
      <!--<div class="fui-banner-item">-->
        <!--<img src="../../assets/images/1.jpg" alt="">-->
      <!--</div>-->

    </div>
    <ul class="fui-circle" v-if="showCircle">
      <li
        v-for="item,curIndex in list"
        @click="switchImages(index)"
      >
        <span class="fui-circle-item" :class="(curIndex + 1 === index) ? 'li-on' : ''"></span>
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
        // 客户端宽度
        clientWidth: 0,
        // 图片张数
        imgLen: '',
        startX: 0,
        offsetLeft: 0,
        transform: '',
        // 控制 circle button
        index:1,
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
      },
      infiniteLoop: {
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

      this.touchMoving(-clientWidth);
      this.clientWidth = clientWidth;
      this.offsetLeft = -clientWidth;
    },

    methods: {
      touchStart(e) {
        let startX = e.changedTouches[0].pageX;
        if(this.imgLen.length <= 0) return;
        this.startX = startX;
        this.offsetLeft = startX - this.offsetLeft;
      },
      touchMove(e) {
        let _this = this;
        let offsetLeft = _this.offsetLeft;
        let moveX = e.changedTouches[0].pageX;
        let offsetX = moveX - offsetLeft;

        this.touchMoving(offsetX);
      },
      touchEnd(e) {
        let _this = this;
        let startX = _this.startX;
        let endX = e.changedTouches[0].pageX;
        let offsetX = endX - startX;
        _this.touchEnded(offsetX);
      },
      touchMoving(offsetX) {
        this.transform = 'translate3D('+offsetX+'px, 0, 0)';
      },
      touchEnded(offsetX) {
        let clientWidth = this.clientWidth;
        let index = this.index;
        let imgLen = this.imgLen;

        if(Math.abs(offsetX) > clientWidth / 4) { // 开始滑动
          if(offsetX > 0) { // 右滑动

             --index;
            offsetX = -clientWidth * index;
          }else { // 左滑动

            ++index;
            offsetX = -clientWidth * index;
          }
        } else {  // 不滑动
          offsetX = -clientWidth * index;
        }

        this.touchMoving(offsetX);

        // 滑动边界，开启循环模式
        // 关键在于重置图片的 left 值
        // 如果使用 transition 就能看到切换过程
        if(index <= 0) {
          index = imgLen;
          offsetX = -clientWidth * index;
          this.touchMoving(offsetX);
        }
        if(index >= imgLen + 1) {
          index = 1;
          offsetX = -clientWidth * index;
          this.touchMoving(offsetX);
        }

        this.index = index;
        this.offsetLeft = -clientWidth * index
      },
      switchImages(index) {
        let clientWidth = this.clientWidth;
        let offsetX = -clientWidth * index;

        this.transform = 'translate3D('+offsetX+'px, 0, 0)';
        this.index = index;
        this.offsetLeft = offsetX;
      }
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

    /*transition: all .3s;*/

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
    transition: all .5s;
  }
  .li-on {
    background-color: #e4007f;
  }
</style>

