<template>
  <div class="login h_100 flex flex_justify_center">
    <div class="inner_box">
      <div class="title c_fff bold t_center">系统登录</div>
      <el-form ref="form" :model="param" :rules="rules">
        <el-form-item prop="loginName">
          <el-input
            v-model="param.loginName"
            placeholder="用户名"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item prop="passwrod">
          <el-input
            type="passwrod"
            prefix-icon="el-icon-lock"
            v-model="param.password"
            placeholder="密码"
            show-password
          />
        </el-form-item>
        <el-button
          class="w_100"
          type="primary"
          :loading="loginLoading"
          @click="login('form')"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
  import MD5 from 'js-md5';
export default {
  name: "Login",
  data() {
    return {
      param: {
        loginName: "",
        password: "",
      },
      rules: {
        loginName: [{ required: true, message: "请输入用户名", trigger: blur }],
        password: [{ required: true, message: "请输入密码", trigger: blur }],
      },
      loginLoading: false,
    };
  },
  created() {},
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginLoading = true;
          let form = Object.assign({}, this.param);
          form.password = MD5(form.password);
          this.$store.dispatch("user/login", form).then(() => {
            this.loginLoading = false;
            console.log("跳转");
            this.$router.push({name: "Home"});
          }).finally(() => {
            this.loginLoading = false;
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  background-color: #2d3a4b;
  .inner_box {
    width: 450px;
    margin-top: 220px;
    .title {
      padding-bottom: 40px;
      font-size: 30px;
    }
    /deep/ .el-form-item {
        background-color: #283443;
        border: 1px solid #434c58;
        border-radius: 4px;
        .el-input {
          input{
            height: 50px;
            padding-right: 30px;
            font-size: 16px;
            background-color: transparent;
            border: none;
            color: #fff;
          }
        }
    }
  }
}
</style>
