import {apiLogin} from '@/api/user'
export default {
    namespaced: true,
    state: {
        userInfo: {
            userId: '',
            userName: '',
            avatar: '',
            token: localStorage.getItem("USER_TOKEN")
            
        },
    },
    mutations: {
        SET_USER_INFO(state, data = {}) {
            state.userInfo.userId = data.userId;
            state.userInfo.userName = data.userName;
            state.userInfo.avatar = data.avatar;
            // state.userInfo.token = data.token;
            console.log('更新user:', state.userInfo);
        },
        SET_USER_TOKEN(state, data) {
            state.userInfo.token = data.token;
            localStorage.setItem("USER_TOKEN", data.token);
            console.log('更新token:', state.userInfo);
        }
    },
    actions: {
        // 登录
        login({commit, dispatch}, data) {
            return new Promise((resolve, reject) => {
                apiLogin(data).then(async data => {
                    commit('SET_USER_INFO', data.user);
                    // 动态添加可访问的路由
                    await dispatch('permission/handleRoutes', null, {root: true})
                    resolve('success')
                }).catch((err) => {
                    console.log(err);
                    reject('error')
                });
            })
        },
        // 退出登录
        logout({commit, dispatch}) {
            return new Promise((resolve) => {
                        async function logout() {
                            commit('SET_USER_INFO', {})
                            commit('SET_USER_TOKEN', {})
                            // 重置路由
                            await dispatch('permission/resetRoute', null, {root: true})
                            // 清空缓存路由
                            commit("tagsView/CLEAR_CACHE_VIEW", null, {
                                root: true,
                            });
                            // 情况访问过的路由
                            commit("tagsView/CLEAR_VISITED_VIEW", null, {
                                root: true,
                            });
                            // 清空固定路由
                            commit("tagsView/CLEAR_FIXED_VISITED_VIEW", null, {
                                root: true,
                            });
                            resolve('success')
                        }
                       return logout();
                    }
            )
        },
    },
    modules: {}
}
