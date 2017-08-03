<!-- 横向列表布局，参考footer样式 -->
<template>
  <ul class="icon-list">
    <li v-for="(item, index) in iconList" :key="index">
      <a class="nav-home" 
        href="javascript:"
        :class="(isToggleClass && index === curIndex) ? 'li-on' : ''" 
        @click="toggleClass(index)"
      >
        <span class="iconfont" v-html="item.icon"></span>
        {{item.text}}
      </a>
    </li>
  </ul>

</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        curIndex: 0
      }
    },
    props: {
      iconList: Array,
      isToggleClass: {
        type: Boolean,
        default: false
      }
    },
    mounted() {

    },
    methods: {
      toggleClass(index) {

        if(!this.isToggleClass) {
          index = 999
        };

        this.$data.curIndex = index;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/style/layout.less";


  .icon-list  {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;


    .li-on span {
      color: @red;
    }
    a {
      display: block;
    }
    a span {
      display: block;
      text-align: center;
      margin: 0 auto;

      font-size: 18px;

    }
  }

</style>
