<template>
  <div class="flex flex_align_center logo_box">
    <div class="logo"></div>
    <h1 class="pl_20 c_fff fontsize_14">后台管理框架</h1>
  </div>
</template>
<script lang="ts">
export default {
  name: "Logo",
};
</script>
<style lang="scss" scoped>
.logo_box {
  width: 230px;
  padding: 10px 20px;
  background-color: #293347;
  .logo {
    min-width: 30px;
    height: 30px;
    background: url("../../../assets/img/logo/logo.png");
    background-size: 100% 100%;
  }
}
</style>
