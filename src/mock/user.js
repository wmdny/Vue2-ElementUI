// 引入mockjs
const Mock = require('mockjs')
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
                token: ''
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
        body: {
            status: 200,
        }
    }
})
