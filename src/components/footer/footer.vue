<template>
  <footer class="footer">
    <div class="footer-wrap">
      <iconList :iconList="iconList" :isToggleClass="isToggleClass"></iconList>
    </div>
  </footer>
</template>

<script type="text/javascript">
  import iconList from '../iconList.vue'
  export default {
    data() {
      return {
        iconList: [
          {
            icon: '&#xe605;',
            text: '首页'
          },{
            icon: '&#xe606;',
            text: '需求'
          },{
            icon: '&#xe760;',
            text: '发布'
          },{
            icon: '&#xe603;',
            text: '我的2'
          },
        ],
        isToggleClass: true
      }
    },
    components: {
      iconList
    }
  }
</script>
<style lang="less" scoped>
  @import "../../assets/style/layout.less";
  .footer {

    width: 100%;
    max-width: @max-width;
    height: 54px;
    font-size: 14px;
  }
  .footer-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: @max-width;
    height: 54px;
    background-color: #fff;
    z-index: 99;
  }
</style>
