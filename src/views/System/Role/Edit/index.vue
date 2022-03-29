<template>
  <div>
    <el-button type="primary" @click="goBack">返回</el-button>
    <el-button type="primary" :loading="loading" @click="edit">确定</el-button>
    <el-form ref='form' :model="param" :rules="rules"  class="pt_20">
      <el-form-item label="姓名">
        <el-input v-model="param.name"  placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-input v-model="param.date"  placeholder="请选择日期"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="param.address"  placeholder="请输入地址"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {apiGetDetail,apiUpdate} from '@/api/system/role'
export default {
  name:'RoleEdit',
  components: {},
  props:{
    id:{
      type:String,
      required:true
    }
  },
  data () {
    return {
      param:{
        id:'',
        name:'',
        date:'',
        address:''
      },
      rules:{
        name:[
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        date:[
          { required: true, message: '请选择日期', trigger: 'blur' }
        ],
        address:[
          { required: true, message: '请输入地址', trigger: 'blur' }
        ]
      },
      loading:false
    }
  },
  created(){
    // 获取详情
    apiGetDetail({id:this.id}).then(data => {
      this.param = data.data||{}
    })
  },
  methods:{
    // 返回
    async goBack(){
      await this.$store.commit('tagsView/DELETE_CACHE_VIEW',this.$route.name)
      await this.$store.commit('tagsView/DELETE_VISITED_VIEW',this.$route.name)
      await this.$store.commit('tagsView/DELETE_CACHE_VIEW','Role')
      await this.$store.commit('tagsView/DELETE_VISITED_VIEW','Role')
      this.$router.push({name:'Role'})
    },
    // 编辑
    edit(){
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          apiUpdate(this.param).then(() => {
            this.$message.success('编辑成功！')
            this.goBack();
          }).finally(() => {
            this.loading = false;
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
  /deep/ .el-form{width: 500px;
    .el-input,.el-textarea{width: 400px;}
  }
</style>
