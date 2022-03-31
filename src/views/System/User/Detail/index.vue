<template>
    <div>
        <el-button @click="goBack" type="primary"  size="mini" >返回</el-button>
        <el-form :model="myForm" :rules="rules" size="mini" class="pt_20" label-width="80px" ref='form'>
            <el-form-item label="登录名">
                <el-input placeholder="请输入登录名" v-model="myForm.loginName"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input placeholder="请输入姓名" v-model="myForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-select placeholder="请选择角色" v-model="myForm.role">
                    <el-option
                            :key="item.id"
                            :label="item.roleName"
                            :value="item.id"
                            v-for="item in roleList">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="电话">
                <el-input placeholder="请输入电话" v-model="myForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input placeholder="请输入邮箱" type="email" v-model="myForm.email"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input placeholder="请输入地址" type="textarea" v-model="myForm.address"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input placeholder="请输入备注" type="textarea" v-model="myForm.remark"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {apiGetDetail} from '@/api/system/user'
    
    export default {
        name: 'UserDetail',
        components: {},
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                roleList: [{roleName: '管理员', id: 1}, {roleName: '普通用户', id: 2}],
                myForm: {
                    id: null,
                    userName: '',
                    loginName: '',
                    createTime: '',
                    tel: '',
                    email: '',
                    remark: '',
                    address: '',
                    role: null
                },
                rules: {
                    userName: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    loginName: [
                        {required: true, message: '请输入登录名', trigger: 'blur'}
                    ],
                    address: [
                        {required: true, message: '请输入地址', trigger: 'blur'}
                    ]
                },
                loading: false
            }
        },
        created() {
            if (undefined === this.id) {
                //如果浏览器界面刷新，缺少参数就直接返回
                this.goBack();
                return this.$message.error("参数缺失");
            }
            // 获取详情
            apiGetDetail({id: this.id}).then((data) => {
                this.myForm = data.data || {}
            });
        },
        methods: {
            // 返回
            goBack() {
                this.$router.replace({name: 'User'})
                this.$store.commit('tagsView/DELETE_CACHE_VIEW', this.$route.name)
                this.$store.commit('tagsView/DELETE_VISITED_VIEW', this.$route.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    /deep/ .el-form {
        width: 500px;
        
        .el-input, .el-textarea {
            width: 400px;
        }
    }
</style>
