<template>
  <div class="fui-tab">
    <div class="fui-tab-head-warp">
      <div class="fui-tab-head" 
        @touchstart="touchStart" 
        @touchmove="touchMove" 
        @touchend="touchEnd"
        :style="{left}" 
        ref="tabHead"
      >
        <a href="javascript:" 
          class="fui-tab-navbar" 
          :class="(index === thisIndex) ? 'li-on' : ''" 
          @click="switchTab(index)" 
          v-for="item, index in list"
        >
          {{item}}
        </a>
      </div>
    </div>
    <transition-group name="list" tag="div" 
      class="fui-tab-bd"
      enter-active-class="animate bounceInDown"
      leave-active-class="animated rotateOutDownRight"
    >
      <div class="fui-tab-bd-item" 
        v-show="(index === thisIndex) ? true : false" 
        v-for="item , index in list" 
        v-bind:key="index"
      >
        {{index}}{{index}}<br>
        {{index}}{{index}}<br>
        {{index}}{{index}}<br>
        {{index}}{{index}}<br>
        {{index}}<br>
        {{index}}<br>
        {{index}}<br>
        {{index}}<br>
      </div>
    </transition-group>
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 当前点击的位置
        thisIndex: 0,
        // tabhead 的左偏移
        left: 0,
        width: 0,
        // touch 开始的位置
        startX: 0,
        oMleft: 0,
      }
    },

    props: {
      list: Array
    },
    mounted() {
      var m = this.$refs.tabHead.getBoundingClientRect();
      this.$data.width = m.width;
      console.log(document.documentElement.clientWidth)
    },
    methods: {
      switchTab(index) {
        console.log(index)
        this.$data.thisIndex = index;
      },
      touchStart(e) {
        var startX = e.changedTouches[0].clientX;
        // 减去上一次滑动的左偏移
        this.$data.startX = startX - parseInt(this.$data.left);
      },
      touchMove(e) {
        var docWidth = document.documentElement.clientWidth;
        var tabHeadWidth = this.$data.width;
        var startX = this.$data.startX;
        var moveX = e.changedTouches[0].clientX;
        var m = this.$refs.tabHead.getBoundingClientRect();
        var mLeft = m.left;
        // 超出的长度
        var overSizeX = tabHeadWidth - docWidth;
        // 滑动的长度
        var offsetX = moveX - startX;

        if(tabHeadWidth > docWidth) {
          
          if(offsetX < 0) { // 往左滑
            // 右边界
            if(-offsetX >= overSizeX) {
              offsetX = -overSizeX;
            }
          } else { // 往右滑
            // 左边界
            if(mLeft >= 0) {
              offsetX = 0;
            }
          }

          this.$data.left = offsetX + 'px';
        } 
      },

      touchEnd(e) {
        var endX = e.changedTouches[0].clientX;
      }
    }

  }
</script>

<style lang="less" scoped>
  @import url('https://unpkg.com/animate.css@3.5.1/animate.min.css');
  .list-enter-active, .fade-leave-active {
    transition: all .5s
  }
  .list-enter,.list-leave-active /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  .fui-tab {
    position: relative;
    width: 100%;
    font-size: 14px;
    background-color: #fff;

  }
  .fui-tab-head-warp {
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;
  }

  .fui-tab-head {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    line-height: 50px;

    a {
      height: 50px;
      display: inline-block;
      padding: 0 12px;
      border-bottom: 1px solid  #eee;
    }

    .li-on {
      border-bottom: 1px solid #e4007f;
      transition: border-bottom 1s;
    }
  }
  .fui-tab-bd {
    position: relative;
  }
  .fui-tab-bd-item {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: #fff;
  }
</style>
