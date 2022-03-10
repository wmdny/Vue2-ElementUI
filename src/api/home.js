import api from './base'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
    return request({
        url: api.login.Login,
        method: 'post',
        data
    })
}
//
export function register(data) {
    return request({
        url: api.login.register,
        method: 'post',
        data
    })
}

export function test(data) {
    return request({
        url: api.test.test,
        method: 'post',
        data
    })
}

