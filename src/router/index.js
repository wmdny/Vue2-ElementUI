import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由插件
Vue.use(VueRouter)

//
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue')
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
