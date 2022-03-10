<template>
    <div class="login" clearfix>
        <div class="login-wrap">
            <el-row justify="center" type="flex">
                <el-form :model="user" label-width="80px" ref="loginForm" status-icon>
                    <h3>登录</h3>
                    <hr>
                    <el-form-item label="用户名" prop="username">
                        <el-input placeholder="请输入用户名" prefix-icon v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item id="password" label="密码" prop="password">
                        <el-input placeholder="请输入密码" show-password v-model="user.password"></el-input>
                    </el-form-item>
                    <router-link to="/">找回密码</router-link>
                    <router-link to="/register">注册账号</router-link>
                    <el-form-item>
                        <el-button @click="doLogin()" icon="el-icon-upload" type="primary">登 录</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {login} from "@/api/home";
    
    export default {
        name: "Login",
        data() {
            return {
                user: {
                    username: "",
                    password: ""
                },
            };
        },
        created() {
        },
        methods: {
            doLogin() {
                if (!this.user.username) {
                    return this.$message.error("请输入用户名！");
                } else if (!this.user.password) {
                    return this.$message.error("请输入密码！");
                } else {
                    //校验用户名和密码是否正确;
                    // this.$router.push({ path: "/personal" });
                    login({
                        username: this.user.username,
                        password: this.user.password
                    }).then((data) => {
                        this.$store.commit('setToken', data.user);
                        this.$message.success("登录成功");
                        this.$router.push({path: "/about"});
                    })
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        width: 100%;
        height: 740px;
        /*background: url("@/assets/images/bg.jpg") no-repeat;*/
        background-size: contain;
        overflow: hidden;
    }
    
    .login-wrap {
        /*background: url("@/assets/images/login_bg.png") no-repeat;*/
        background-size: cover;
        width: 400px;
        height: 300px;
        margin: 215px auto;
        overflow: hidden;
        padding-top: 10px;
        line-height: 40px;
    }
    
    #password {
        margin-bottom: 5px;
    }
    
    h3 {
        color: #0babeab8;
        font-size: 24px;
    }
    
    hr {
        background-color: #444;
        margin: 20px auto;
    }
    
    a {
        text-decoration: none;
        color: #aaa;
        font-size: 15px;
    }
    
    a:hover {
        color: coral;
    }
    
    .el-button {
        width: 80%;
        margin-left: -50px;
    }
</style>
