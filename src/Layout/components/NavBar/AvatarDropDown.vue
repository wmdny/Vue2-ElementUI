<template>
    <el-dropdown @command='handleClick' trigger="click">
    <span class="el-dropdown-link">
      <el-avatar :size="36" :src="avatar" shape="square"></el-avatar>
    </span>
        <el-dropdown-menu>
            <el-dropdown-item command='userInfo'>个人中心</el-dropdown-item>
            <el-dropdown-item command='changePassword'>修改密码</el-dropdown-item>
            <el-dropdown-item command='logout'>退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
    import avatar from '../../../assets/img/user/user-4.png';
    export default {
        name: "",
        data() {
            return {
                avatar: this.$store.getters.userInfo.avatar || avatar
            }
        },
        methods: {
            handleClick(command) {
                if (command === 'userInfo') this.goUserInfo()
                else if (command === 'changePassword') this.changePassword()
                else if (command === 'logout') this.logout()
            },
            // 跳转用户信息页面
            goUserInfo() {
                this.$router.push({name: "UserInfo"});
            },
            // 跳转修改密码页面
            changePassword() {
                this.$router.push({name: "ChangePassword"});
            },
            // 退出登录
            logout() {
                this.$store.dispatch("user/logout").then(() => {
                    this.$router.push({name: "Login"});
                });
            }
        }
    };
</script>
<style lang="scss" scoped>
    /deep/ .el-avatar {
        background: none;
    }
</style>
