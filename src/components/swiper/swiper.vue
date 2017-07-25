<!-- 图片轮播组件 -->
<template>
  <div class="fui-swiper">

    <div class="fui-swiper-wrap"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd"
         @touchcancel="touchCancel"
         :style="{transform}"
         ref="swipeArea"
    >
      <div class="fui-swiper-item">
        <img :src="host + list[imgLen - 1].url" alt="">
      </div>
      <div class="fui-swiper-item" v-for="item in list">
        <img :src="host + item.url" alt="">
      </div>

      <div class="fui-swiper-item">
        <img :src="host + list[0].url" alt="">
      </div>

    </div>
    <ul class="fui-circle" v-if="showCircle">
      <li
        v-for="item,curIndex in list"
        @click="switchButton(curIndex)"
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
        isStop: false,
      }
    },
    props: {
      // 图片 list
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
        this.imgLen = this.list.length;
      }
    },
    
    created() {
      let clientWidth = document.documentElement.clientWidth;

      this.clientWidth = clientWidth;
      this.offsetLeft = -clientWidth;

      this._touchMoving(-clientWidth);

      var _this = this;

      document.addEventListener('scroll', function(e) {
       if(_this.isStop === false) {
        _this.isStop = true;
       }else {
         e.preventDefault();
         return false;
       }

      }, { passive: false });

    },

    methods: {
      touchStart(e) {
        let startX = e.changedTouches[0].pageX;

        if(this.imgLen.length <= 0) return;
        this.startX = startX;
        this.offsetLeft = startX - this.offsetLeft;
        this.isStop = false;

      },
      touchMove(e) {
        if(this.isStop) return;

        let _this = this;
        let offsetLeft = _this.offsetLeft;
        let startX = this.startX;
        let moveX = e.changedTouches[0].pageX;
        let offsetX = moveX - offsetLeft;

        let b = Math.abs(moveX - startX);
 
        if(b < 20) return;


        e.preventDefault();
        e.stopPropagation();
        
        this._touchMoving(offsetX);
      },
      touchEnd(e) {
        if(this.isStop) return;

        let _this = this;
        let startX = _this.startX;
        let endX = e.changedTouches[0].pageX;
        let offsetX = endX - startX;

        _this.touchEnded(offsetX);
      },

      _touchMoving(offsetX) {
        

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

        this._touchMoving(offsetX);

        // 滑动边界，开启循环模式
        // 关键在于重置图片的 left 值
        // 如果使用 transition 就能看到切换过程
        if(index <= 0) {
          index = imgLen;
          offsetX = -clientWidth * index;
          this._touchMoving(offsetX);
        }
        if(index >= imgLen + 1) {
          index = 1;
          offsetX = -clientWidth * index;
          this._touchMoving(offsetX);
        }

        //if(this.isStop) return;

        this.index = index;
        this.offsetLeft = -clientWidth * index;

      },
      switchButton(index) {
        let clientWidth = this.clientWidth;
        let offsetX = -clientWidth * ++index;

        this.transform = 'translate3D('+offsetX+'px, 0, 0)';
        this.index = index;
        this.offsetLeft = offsetX;
      }
    }
  }
</script>

<style lang="less" scoped>
  .fui-swiper {
    position: relative;
    margin-top: 1px;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
  .fui-swiper-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-item: center;

  }
  .fui-swiper-item {
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
    z-index: 9;

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

