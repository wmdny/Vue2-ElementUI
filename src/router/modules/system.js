import Layout from '@/Layout/index.vue'
export default {
  path: '/system',
  name: 'System',
  redirect:'/system/user',
  meta:{title:'系统管理',icon:'el-icon-s-data',needCache:true},
  component: Layout,
  children:[
    {
      path:'user',
      name:'User',
      meta:{title:'用户管理',needCache:true},
      component: () => import('@/views/System/User/index.vue')
    },{
      path:'user/detail/:id',
      name:'UserDetail',
      props:true,
      hidden:true,
      meta:{title:'用户管理-详情',needCache:true},
      component: () => import('@/views/System/User/Detail/index.vue')
    },{
      path:'user/edit/:id',
      name:'UserEdit',
      props:true,
      hidden:true,
      meta:{title:'用户管理-编辑',needCache:true},
      component: () => import('@/views/System/User/Edit/index.vue')
    },
    {
      path:'role',
      name:'Role',
      meta:{title:'角色管理',needCache:true},
      component: () => import('@/views/System/Role/index.vue')
    },{
      path:'role/detail/:id',
      name:'RoleDetail',
      props:true,
      hidden:true,
      meta:{title:'角色管理-详情',needCache:true},
      component: () => import('@/views/System/Role/Detail/index.vue')
    },{
      path:'role/edit/:id',
      name:'RoleEdit',
      props:true,
      hidden:true,
      meta:{title:'角色管理-编辑',needCache:true},
      component: () => import('@/views/System/Role/Edit/index.vue')
    }
  ],
}
