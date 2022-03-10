import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi, {size: 'small', zIndex: 3000})

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
}).$mount()
