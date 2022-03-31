// 引入mockjs
const Mock = require('mockjs')
// 数据
let listData = [
    {
        id:'001',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        id:'002',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id:'003',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id:'004',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    },{
        id:'005',
        date: '2016-05-05',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        id:'006',
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id:'007',
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id:'008',
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    },{
        id:'009',
        date: '2016-05-09',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        id:'010',
        date: '2016-05-10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id:'011',
        date: '2016-05-11',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id:'012',
        date: '2016-05-12',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }
]
// 登录
Mock.mock('/api/user/login', 'post', (req) => {
    const data = JSON.parse(req.body);
    if (data.userName === 'xxs' && data.password === '123') {
        return {
            status: 200,
            user: {
                userId: '001',
                userName: data.userName,
                avatar: 'https://img0.baidu.com/it/u=3233551726,336273710&fm=26&fmt=auto&gp=0.jpg',
                token: 'xiixixixi'
            },
            msg: '登录成功'
        };
    } else {
        return {
            status: 500,
            msg: '用户名或密码错误'
        };
    }
})
// 修改密码
Mock.mock('/api/user/changePassword', 'post', () => {
    return {
        status: 200,
    }
})
//获取用户列表
Mock.mock('/api/user/list', 'post', () => {
    return {
        status: 200,
        data: {
            list: listData,
            count: 0,
        },
        msg: '查询失败'
    
    }
})
//获取用户详情
Mock.mock('/api/user/info', 'post', (req) => {
    const data = JSON.parse(req.body);
    const id = data.id;
    const resultData = listData.find(item => item.id===id)
    return {
        status: 200,
        data: resultData
    }
})
//编辑保存用户信息
Mock.mock('/api/user/save', 'post', () => {
    return {
        status: 200,
    }
})

//删除用户信息
Mock.mock('/api/user/del', 'post', () => {
    return {
        status: 200,
    }
})
