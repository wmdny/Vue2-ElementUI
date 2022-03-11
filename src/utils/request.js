import axios from 'axios'
import store from '@/store'
// 根据环境不同引入不同api地址
import {baseApi} from '@/config'
import {isEmpty} from "element-ui/src/utils/util";
import {Message, MessageBox} from "element-ui";
import router from "@/router";
// create an axios instance
const service = axios.create({
    baseURL: baseApi, // url = base api url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
        config => {
            //每次请求前设置请求头中携带token
            config.headers['x-token'] = store.getters.token;
            return config;
        },
        error => {
            // do something with request error
            console.log(error) // for debug
            return Promise.reject(error)
        }
)
// respone拦截器
service.interceptors.response.use(
        response => {
            //更新浏览器中的token
            let token = response.headers['x-token'];
            if (!isEmpty(token) && token !== store.getters.token) {
                store.commit("user/SET_USER_TOKEN", {token: response.headers['x-token']});
            }
            const res = response.data
            if (res.status && res.status !== 200) {
                Message({
                    message: res.msg || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
                // token过期或无效：401
                if (res.status === 401) {
                    MessageBox.confirm('您已退出登录，您可以取消以留在此页面，或重新登录', '确认注销', {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        store.dispatch("user/logout").then(() => {
                            router.push({name: 'Login'});
                        }).catch((eee) => {
                            console.log(eee)
                        });
                    })
                }
                return Promise.reject(res.msg || 'error')
            } else {
                return Promise.resolve(res)
            }
        },
        error => {
            Message({
                message: error.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            console.log('err' + error) // for debug
            return Promise.reject("服务器连接失败");
        }
)

/**
 * 封装接口请求方法
 * @param url 域名后需补齐的接口地址
 * @param method 接口请求方式
 * @param data data下的其他数据体
 */
const request = (url, method, data) => {
    return service({
        url,
        method,
        data
    })
}

export default request
