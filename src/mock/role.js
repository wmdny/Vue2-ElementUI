// 引入mockjs
const Mock = require('mockjs')
// 数据
let listData = [
    {
        id:'001',
        date: '2016-05-01',
        name: '管理员',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        id:'002',
        date: '2016-05-02',
        name: '审核员',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id:'003',
        date: '2016-05-03',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id:'004',
        date: '2016-05-04',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1516 弄'
    },{
        id:'005',
        date: '2016-05-05',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        id:'006',
        date: '2016-05-06',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id:'007',
        date: '2016-05-07',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id:'008',
        date: '2016-05-08',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1516 弄'
    },{
        id:'009',
        date: '2016-05-09',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        id:'010',
        date: '2016-05-10',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id:'011',
        date: '2016-05-11',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id:'012',
        date: '2016-05-12',
        name: '普通用户',
        address: '上海市普陀区金沙江路 1516 弄'
    }
]
//获取角色列表
Mock.mock('/api/role/list', 'post', () => {
    return {
        status: 200,
        data: {
            list: listData,
            count: 0,
        },
        msg: '查询失败'
    
    }
})
//获取角色详情
Mock.mock('/api/role/info', 'post', (req) => {
    const data = JSON.parse(req.body);
    const id = data.id;
    const resultData = listData.find(item => item.id===id)
    return {
        status: 200,
        data: resultData
    }
})
//编辑保存角色信息
Mock.mock('/api/role/save', 'post', () => {
    return {
        status: 200,
    }
})

//删除角色信息
Mock.mock('/api/role/del', 'post', () => {
    return {
        status: 200,
    }
})
