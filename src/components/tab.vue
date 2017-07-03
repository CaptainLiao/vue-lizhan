<!-- 普通的tab切换组件 -->
<template>
  <div class="fui-tab">
    <div class="fui-tab-head-warp">
      <div class="fui-tab-head"

        :style="{left}"
        ref="tabHead"
      >
        <a href="javascript:"
          class="fui-tab-navbar"
          :class="(index === thisIndex) ? 'li-on' : ''"
          @click="switchTab(index)"
          v-for="item, index in list"
          ref="tabNavbar"
        >
          {{item}}
        </a>
        <p class="tab-line"
          :style="{width: lineWidth, left: lineLeft}"
        ></p>
      </div>
    </div>
    <transition-group
      name="list"
      tag="div"
      class="fui-tab-bd"
    >
      <div class="fui-tab-bd-item"
        v-show="(index === thisIndex) ? true : false"
        v-for="item , index in list"
        v-bind:key="index"
      >
      <slot :name="'tab_' + index">

      </slot>
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
      // 切换选项组
      list: Array
    },
    mounted() {

    },
    methods: {
      // 1、切换tab 增加navbar line
      // 2、触发 switchTab 事件
      switchTab(index) {
        this.$data.thisIndex = index;
        this.$emit('switchTab', index);
      },

    }

  }
</script>

<style lang="less" scoped>
  @import url('https://unpkg.com/animate.css@3.5.1/animate.min.css');


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
    display: flex;
    justify-content: space-around;

    overflow: hidden;
    white-space: nowrap;
    line-height: 50px;

    a {
      flex-grow: 1;
      height: 50px;
      text-align: center;
      display: inline-block;
      padding: 0 12px;
      border-bottom: 1px solid  #eee;
    }

    .li-on {
        border-bottom: 2px solid #e4007f;
    }
  }
  .fui-tab-bd {
    position: relative;
    height: 100%;
    background-color: #f7f7f7;
  }
  .fui-tab-bd-item {
    width: 100%;
    height: 100%;
  }
</style>
