import Vue from 'vue'
import App from './App'
import store from '@/utils/cacheStore'
import router from './router/'
import '@/styles/index.scss'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 如果是开发环境，引入mock
// process.env.NODE_ENV === 'development' && require('@/mock/index')
Vue.config.productionTip = false

Vue.use(ElementUi, {size: 'small', zIndex: 3000})

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
}).$mount()
