<template>
    <div class="login clearfix">
        <div class="login-wrap">
            <el-row justify="center" type="flex">
                <el-form :model="user" label-width="80px" ref="loginForm" status-icon>
                    <h3>注册</h3>
                    <hr>
                    <el-form-item label="用户名" prop="username">
                        <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input placeholder="请输入邮箱" v-model="user.email"></el-input>
                    </el-form-item>
                    <el-form-item label="设置密码" prop="password">
                        <el-input placeholder="请输入密码" show-password v-model="user.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="doRegister()" icon type="primary">注册账号</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {register} from "@/api/home";

    export default {
        name: "login",
        data() {
            return {
                user: {
                    username: "",
                    email: "",
                    password: ""
                },
            };
        },
        created() {
            // console.log($);
            // console.log("1111");
        },
        methods: {
            doRegister() {
                if (!this.user.username) {
                    this.$message.error("请输入用户名！");
                } else if (!this.user.email) {
                    this.$message.error("请输入邮箱！");
                } else if (this.user.email !== "") {
                    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    if (!reg.test(this.user.email)) {
                        this.$message.error("请输入有效的邮箱！");
                    } else if (!this.user.password) {
                        return this.$message.error("请输入密码！");
                    } else {
                        // this.$router.push({ path: "/" }); //无需向后台提交数据，方便前台调试
                        register("/register/", {
                            name: this.user.username,
                            email: this.user.email,
                            password: this.user.password
                        }).then(res => {
                            // console.log("输出response.data", res.data);
                            // console.log("输出response.data.status", res.data.status);
                            if (res.data.status === 200) {
                                this.$router.push({path: "/"});
                            } else {
                                alert("您输入的用户名已存在！");
                            }
                        });
                    }
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
        /*background: url("@/assets/images/bg1.png") no-repeat;*/
        background-size: cover;
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
        line-height: 20px;
    }

    h3 {
        color: #0babeab8;
        font-size: 24px;
    }

    hr {
        background-color: #444;
        margin: 20px auto;
    }

    .el-button {
        width: 80%;
        margin-left: -50px;
    }
</style>
