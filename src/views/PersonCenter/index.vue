<template>
  <div class="user_info pt_20">
    <div class="pb_20 flex fontsize_18">
      <div class="label">姓名：</div>
      <div>{{userInfo.userName}}</div>
    </div>
    <div class="flex">
      <div class="label fontsize_18">头像：</div>
      <img :src="userInfo.avatar" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:'UserInfo',
  components: {},
  data () {
    return {
      userInfo:this.$store.getters.userInfo
    }
  },
}
</script>
<style lang="scss" scoped>
  .user_info{
    .label{width: 80px;}
    img{width: 100px;height: 100px;border-radius: 4px;}
  }
</style>
