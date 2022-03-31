<template>
    <div>
        <el-table
                :data="list"
                border
                size="mini"
                stripe
                v-loading='loading'>
            <el-table-column
                    align="center"
                    header-align="center"
                    label="#"
                    type="index"
            >
            </el-table-column>
            <el-table-column
                    align='center'
                    label="登录名"
                    prop="loginName"
                    width="150">
            </el-table-column>
            <el-table-column
                    align='center'
                    label="姓名"
                    prop="userName"
                    width="150">
            </el-table-column>
            <el-table-column
                    align='center'
                    label="地址"
                    prop="address"
                    width='300'>
            </el-table-column>
            <el-table-column
                    align='center'
                    label="创建日期"
                    prop="createTime"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button @click="detail(scope.row.id)" type='success' size="mini" >详情</el-button>
                    <el-button @click="edit(scope.row.id)" type='primary' size="mini" >编辑</el-button>
                    <el-button @click="del(scope.row.id)" type='danger' size="mini" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                size="mini"
                :current-page.sync="param.pageNo"
                :page-size='param.pageSize'
                :total="totalCount"
                @current-change="getList"
                layout="prev, pager, next">
        </el-pagination>
    </div>
</template>
<script>
    import {apiDel, apiGetList} from '@/api/system/user'
    
    export default {
        name: 'User',
        components: {},
        data() {
            return {
                loading: false,
                param: {
                    pageNo: 1,
                    pageSize: 10
                },
                list: [],
                totalCount: 0,
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                this.loading = true;
                apiGetList(this.param).then(data => {
                    this.totalCount = data.data.total;
                    this.list = data.data.list;
                }).finally(() => {
                    this.loading = false;
                })
            },
            detail(id) {
                this.$router.push({name: 'UserDetail', params: {id}})
            },
            edit(id) {
                this.$router.push({name: 'UserEdit', params: {id}})
            },
            del(id) {
                apiDel({id}).then(() => {
                    this.$message.success('删除成功！')
                    this.getList();
                })
            }
        }
    }
</script>
