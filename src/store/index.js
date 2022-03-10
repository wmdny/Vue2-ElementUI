import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        token: localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : ''
    },
    getters: {
        count(state) {
            return state.count
        },
        token(state) {
            return state.token
        }
    },
    mutations: {
        addCount(state, num) {
            state.count += num
        },
        setToken(state, user) {
            state.token = user.token;
            localStorage.setItem("TOKEN",user.token);
        },
        delToken(state){
            state.token='';
            localStorage.removeItem("TOKEN");
        }
    },
    actions: {
    }
})
