<template>
  <div>
    <el-button type="primary" @click="goBack">返回</el-button>
    <el-form :model="info" class="pt_20">
      <el-form-item label="姓名">
        <el-input v-model="info.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-input v-model="info.date" disabled></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="info.address" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {apiGetDetail} from '@/api/system/role'
export default {
  name:'RoleDetail',
  components: {},
  props:{
    id:{
      type:String,
      required:true
    }
  },
  data () {
    return {
      info:{
        name:'',
        date:'',
        address:''
      }
    }
  },
  created(){
    // 获取详情
    apiGetDetail({id:this.id}).then((data) => {
      this.info = data.data||{}
    })
  },
  methods:{
    // 返回
    goBack(){
      this.$router.replace({name:'Role'})
      this.$store.commit('tagsView/DELETE_CACHE_VIEW',this.$route.name)
      this.$store.commit('tagsView/DELETE_VISITED_VIEW',this.$route.name)
    }
  }
}
</script>
<style lang="scss" scoped>
  /deep/ .el-form{width: 500px;
    .el-input,.el-textarea{width: 400px;}
  }
</style>
