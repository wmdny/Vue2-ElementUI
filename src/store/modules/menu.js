import router, {routes,  resetRouter} from "@/router";
import Layout from "@/Layout/index";
import {userPermission} from "@/api/system/menu";

function initPermission() {
    return [
        {
            path: '/',
            name: 'Root',
            redirect: '/home',
            component: Layout,
            children: [
                {
                    path: 'home',
                    name: "Home",
                    meta: {title: '首页', icon: 'el-icon-s-home', needCache: true, fixed: true},
                    component: () => import('@/views/Home.vue')
                }
            ]
        },
        {
            path: '*',
            name: 'Error',
            hidden: true,
            redirect: "/404",
        },{
            path: '/person-center',
            name: 'PersonCenter',
            meta:{title:'个人中心',needCache:true},
            hidden:true,
            component: Layout,
            children:[
                {
                    path:'user-info',
                    name:'UserInfo',
                    hidden:true,
                    meta:{title:'个人中心',needCache:true},
                    component: () => import('@/views/PersonCenter/index.vue')
                },
                {
                    path:'change-password',
                    name:'ChangePassword',
                    hidden:true,
                    meta:{title:'修改密码',needCache:true},
                    component: () => import('@/views/PersonCenter/ChangePassword.vue')
                },
            ],
        }
    ];
}
export default {
    namespaced: true,
    state: {
        routes: [],
        permissionRoutes: [],
    },
    mutations: {
        // 设置路由
        setRoutes(state, permissionRoutes) {
            state.routes = routes.concat(permissionRoutes);
            state.permissionRoutes = permissionRoutes;
        },
    },
    actions: {
        // 处理路由
        handleRoutes(context) {
            let permissionRoutes = initPermission();
            return new Promise((resolve, reject) => {
                userPermission().then(data => {
                    if (data && Array.isArray(data.data)) {
                        let routes = generaMenu(data.data);
                        permissionRoutes.push(...routes);
                    }
                    // 将权限路由添加到路由实例中
                    permissionRoutes.forEach((item) => {
                        router.addRoute(item);
                    });
                    console.log('刷新路由')
                    context.commit("setRoutes", permissionRoutes);
                    resolve('success')
                }).catch((err) => {
                    reject('success')
                    console.log(err);
                });
            })
        },
        // 重置路由
        resetRoute(context) {
            resetRouter();
            context.commit("setRoutes", []);
        },
    },
};


export function generaMenu(data) {
    let routes = [];
    data.forEach(item => {
        let menu = {
            path: item.path,
            name: item.name,
            redirect: item.redirect,
            props: item.props,
            hidden: item.hidden,
            meta: {title: item.title, needCache: item.needCache, notNeedAuth: item.notNeedAuth}
        }
        if (item.component != null && item.component !== '') {
            menu.component = item.component === 'Layout' ? Layout : () => import(`@/views${item.component}.vue`);
        }
        if (item.redirect != null && item.redirect !== '') {
            menu.redirect = item.redirect
        }
        if (item.icon != null && item.icon !== '') {
            menu.meta.icon = item.icon
        } else {
            menu.meta.icon = 'el-icon-s-data'
        }
        if (item.childList.length > 0) {
            menu.children = generaMenu(item.childList);
        }
        routes.push(menu)
    })
    return routes;
}


