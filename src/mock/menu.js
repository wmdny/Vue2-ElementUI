// 引入mockjs
const Mock = require('mockjs')
//根据角色权限自定义生成菜单。比较灵活。需要界面配置，

let menus = [
    {
        "id": 10000,
        "parentId": 0,
        "name": "System",
        "component": "Layout",
        "icon": "system",
        "path": "/system",
        "redirect": "/system/user",
        "title": "系统管理",
        "hidden": false,
        "needCache": true,
        "props": false,
        "notNeedAuth": false,
        "remark": ""
    },{
        "id": 11000,
        "parentId": 10000,
        "name": "User",
        "component": "/System/User/index",
        "icon": "User",
        "path": "/user",
        "title": "用户管理",
        "hidden": false,
        "needCache": true,
        "props": false,
        "notNeedAuth": false,
        "remark": ""
    },{
        "id": 11001,
        "parentId": 10000,
        "name": "UserDetail",
        "component": "/System/User/Detail/index",
        "path": "/user/detail/:id",
        "title": "用户管理-详情",
        "hidden": true,
        "needCache": true,
        "props": true,
        "notNeedAuth": false,
    },{
        "id": 11002,
        "parentId": 10000,
        "name": "UserEdit",
        "component": "/System/User/Edit/index",
        "path": "/user/edit/:id",
        "title": "用户管理-编辑",
        "hidden": true,
        "needCache": true,
        "props": true,
        "notNeedAuth": false,
        "remark": ""
    },{
        "id": 12000,
        "parentId": 10000,
        "name": "Role",
        "component": "/System/Role/index",
        "icon": "Role",
        "path": "/role",
        "title": "角色管理",
        "hidden": false,
        "needCache": true,
        "props": false,
        "notNeedAuth": false,
        "remark": ""
    },{
        "id": 12001,
        "parentId": 10000,
        "name": "RoleDetail",
        "component": "/System/Role/Detail/index",
        "path": "/role/detail/:id",
        "title": "角色管理-详情",
        "hidden": true,
        "needCache": true,
        "props": true,
        "notNeedAuth": false,
        "remark": ""
    },{
        "id": 12002,
        "parentId": 10000,
        "name": "RoleEdit",
        "component": "/System/Role/Edit/index",
        "path": "/role/edit/:id",
        "title": "角色管理-编辑",
        "hidden": true,
        "needCache": true,
        "props": true,
        "notNeedAuth": false,
        "remark": ""
    }
]
function buildMenuTree(node,menus) {
    let childList = [];
    menus.forEach(menu => {
        if (menu.parentId == node.id) {
            menu.childList = buildMenuTree(menu, menus);
            childList.push(menu);
        }
    });
    return childList;
}
let menuList = buildMenuTree({id: 0}, menus);



Mock.mock('/api/permission/menuTree', 'post', () => {
    return {
        status: 200,
        data: menuList
    }
})
