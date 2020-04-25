import Vue from 'vue'
import Home from './page/home.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import ElementUI from 'element-ui'
// import { Button } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import Button from 'element-ui/lib/button'
import store from './store'
// import axios from 'axios'

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)
Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Row)
// Vue.prototype.$message = Message
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Home)
})