<template>
  <div>
    <el-button type="primary" @click="goBack" size="mini" >返回</el-button>
    <el-button type="primary" :loading="loading" @click="edit" size="mini" >确定</el-button>
    <el-form ref='form' :model="myForm" :rules="rules"  size="mini"  class="pt_20" label-width="80px">
      <el-form-item label="登录名">
        <el-input v-model="myForm.loginName"  placeholder="请输入登录名"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="myForm.userName"  placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="myForm.role" placeholder="请选择角色">
          <el-option
                  v-for="item in roleList"
                  :key="item.id"
                  :label="item.roleName"
                  :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="myForm.tel"  placeholder="请输入电话"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="myForm.email" type="email"  placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="myForm.address"  placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="myForm.remark"  placeholder="请输入备注"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {apiGetDetail,apiUpdate} from '@/api/system/user'
export default {
  name:'UserEdit',
  components: {},
  props:{
    id:{
      type:Number,
      required: true
    }
  },
  data () {
    return {
      roleList: [{roleName:'管理员', id: 1},{roleName:'普通用户', id: 2}],
      myForm:{
        id:null,
        userName:'',
        loginName:'',
        createTime:'',
        tel:'',
        email:'',
        remark:'',
        address:'',
        role: null
      },
      rules:{
        userName:[
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        loginName:[
          { required: true, message: '请输入登录名', trigger: 'blur' }
        ],
        address:[
          { required: true, message: '请输入地址', trigger: 'blur' }
        ]
      },
      loading:false
    }
  },
  created(){
    if (undefined === this.id) {
      //如果浏览器界面刷新，缺少参数就直接返回
      this.goBack();
      return this.$message.error("参数缺失");
    }
    // 获取详情
    apiGetDetail({id:this.id}).then(data => {
      this.myForm = data.data||{}
    })
  },
  methods:{
    // 返回
    async goBack(){
      await this.$store.commit('tagsView/DELETE_CACHE_VIEW',this.$route.name)
      await this.$store.commit('tagsView/DELETE_VISITED_VIEW',this.$route.name)
      await this.$store.commit('tagsView/DELETE_CACHE_VIEW','User')
      await this.$store.commit('tagsView/DELETE_VISITED_VIEW','User')
      this.$router.push({name:'User'})
    },
    // 编辑
    edit(){
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          apiUpdate(this.myForm).then(() => {
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
