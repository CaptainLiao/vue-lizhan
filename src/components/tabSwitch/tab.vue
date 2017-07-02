<!-- 用于首页顶部 tab navbar -->

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
          :id="item.id"
          :class="(index === thisIndex) ? 'li-on' : ''" 
          @click="switchTab(index)" 
          v-for="item, index in list"
          ref="tabNavbar"
        >
          {{item.name}}
        </a>
        <p class="tab-line"
          :style="{width: lineWidth, left: lineLeft}"
        ></p>
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
        :name="'tab' + index"
      >
      <slot :name="'tab' + index"></slot>
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
        // tab navbar line
        lineWidth: 0,
        lineLeft: 0,
      }
    },

    props: {
      list: Array
    },
    mounted() {
      // 初始化线条的位置
      if(this.list && this.list.length <= 0) {
        this.$data.lineWidth = '80px';
        this.$data.lineLeft =  '0px';
        return;
      };
      var tabNavList = this.$refs.tabNavbar;
      var curNav = tabNavList[0];
      var curCrt = curNav.getBoundingClientRect();
      this.$data.lineWidth = curCrt.width + 'px';
      this.$data.lineLeft = curCrt.left + 'px';
    },
    methods: {
      // 切换tab 增加navbar line
      switchTab(index) { 
        var tabNavList = this.$refs.tabNavbar;
        var curNav = tabNavList[index];
        var curCrt = curNav.getBoundingClientRect();
        var offsetLeft = parseInt(this.$data.left);
        var curLeft = curCrt.left;
        var curWidth = curCrt.width;
        var e1 = {};
        var e2 = {};
        console.log(curCrt)
        e1.changedTouches = [{}];
        e2.changedTouches = [{}];

        if(curWidth > curLeft / 2) {
          e1.changedTouches[0].clientX = curLeft ;
          e2.changedTouches[0].clientX = curLeft + curWidth;
        }else {
          // 往左滑
          e1.changedTouches[0].clientX = curLeft + curWidth;
          e2.changedTouches[0].clientX = curLeft;
        }
      
        
        this.touchStart(e1)
        this.touchMove(e2)

        this.$data.lineWidth = curCrt.width + 'px';
        this.$data.lineLeft = (curCrt.left - offsetLeft) + 'px';
        this.$data.thisIndex = index;
      },
      touchStart(e) {
        console.log(e)
        var m = this.$refs.tabHead.getBoundingClientRect();
        var startX = e.changedTouches[0].clientX;

        // 减去上一次滑动的左偏移
        this.$data.startX = startX - parseInt(this.$data.left);
        this.$data.width = m.width;
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
          if(offsetX > 0) {
            offsetX = 0;
          }
          console.log(offsetX)
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

    display: flex;
    justify-content: space-around;

    overflow: hidden;
    white-space: nowrap;
    line-height: 50px;

    a {
      height: 50px;
      display: inline-block;
      padding: 0 12px;
      border-bottom: 1px solid  #eee;
    }
    
    .tab-line {
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid #e4007f;
      transition: all .5s;
    }
  }
  .fui-tab-bd {
    position: relative;
  }
  .fui-tab-bd-item {
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
