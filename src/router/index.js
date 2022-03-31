import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'


Vue.use(VueRouter)

export const routes = [
    {
        path: '/login',
        name: 'Login',
        hidden:true,
        meta: { notNeedAuth: true },
        component: () => import('@/views/Login.vue')
    },
    {
        path: "/404",
        name: "NotFund",
        hidden: true,
        meta: { notNeedAuth: true },
        component: () => import("@/views/Error/404.vue"),
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

// 重置路由
export function resetRouter() {
    const newRouter = new VueRouter({
        scrollBehavior: () => ({ y: 0 }),
        routes: routes
    })
    router.matcher = newRouter.matcher
}

// 路由前置守卫
router.beforeEach((to,from,next) =>{
    // 免登录白名单
    const whiteList = ['Login','NotFund']
    // 如果未登录 并且目标路由不在白名单
    if(!store.getters.userInfo.userId&&whiteList.indexOf(to.name)===-1) next({name:'Login'})
    else {
        //已登陆或在白名单内
        if (to.name && !router.getRoutes().map(i => i.name).includes(to.name)) {
            //如果不存在此路由，禁止跳转
            next({name: 'Error'});
        } else {
            next();
        }
    }
})

// 路由后置守卫
router.afterEach((to) => {
    // 添加路由缓存
    if (to.name && to.meta.needCache) {
        store.commit("tagsView/ADD_CACHE_VIEW", to.name);
    }
    // 添加访问过路由  直接存入to对象会导致JSON.stringfy的时候因为循环引用报错
    if (to.meta && !to.meta.notNeedAuth)
        if (to.meta.fixed) store.dispatch('tagsView/addFixedVisitedView', {
            name: to.name,
            fullPath: to.fullPath,
            meta: to.meta
        })
        else store.commit("tagsView/ADD_VISITED_VIEW", {
            name: to.name,
            fullPath: to.fullPath,
            meta: to.meta
        });
});

export default router
