<template>
  <el-aside :class="{ collapse: isCollapse }">
    <Logo />
    <el-menu :default-active="$route.name" :collapse="isCollapse"
    >
      <template v-for="item in routes">
        <SlideBarItem :key="item.path" :item="item" />
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import Logo from './Logo'
import SlideBarItem from "./Item.vue";
export default {
  name:'',
  components: {Logo,SlideBarItem},
  data () {
    return {
    }
  },
  computed:{
    isCollapse(){
      return this.$store.getters.isCollapse
    },
    routes(){
      return this.$store.getters.routes
    }
  }
}
</script>
<style lang="scss" scoped>
.el-aside {
  width: 230px !important;
  background-color: #2b363f;//左侧基本底色调
  overflow-x: hidden;
  transition: 0.4s;
  /deep/ .el-menu-item>a>span,/deep/ .el-submenu__title>span{
      position: relative;
      right:0;
      transition:right 1s;
    }
  &.collapse {
    width: 64px !important;
    /deep/ .el-menu-item>a>span,/deep/ .el-submenu__title>span{
      right:-100px;
    }
  }
  // 菜单整体样式
  /deep/ .el-menu {
    max-width: 230px;
    background-color: transparent;
    border: none;
    &:hover {
      i {
        color: #2290fe;//菜单悬浮时图标颜色
      }
    }
    .el-submenu{
      &.is-active{
        .el-submenu__title{
          color: #2290fe;
          >i{color:#2290fe;}
          background-color: #21293a;//菜单被激活时背景颜色
          &:hover{background-color: #2b363f;}//菜单悬浮时背景颜色
        }
      }
      .el-submenu__title{
        color:#fff;//标题颜色
        &:hover{
          background-color: #2b363f;
          color: #2290fe;
          i{color: #2290fe;}
        }
          >i{color:#fff;}
      }
      .el-menu-item {
        background-color: #21293a;
  
      }
    }
    // 菜单项样式
    .el-menu-item {
      &.is-active,
      &:hover {
        background-color: #21293a;
        .el-submenu__title,
        a,
        i {
          color: #2290fe;
        }
      }
      .el-submenu__title,
      a,
      i {
        color: #fff;
        &:hover {
          &,
          i {
            color: #2290fe;
          }
        }
      }
    }
  }
}
</style>
