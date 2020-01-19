const routes = [
    { path: '/', component: () => import(/* webpackChunkName: "index" */ '../page/index/index.vue') },
    { path: '/driver', component: () => import(/* webpackChunkName: "driver" */ '../page/driver/index.vue') },
    { path: '*', component: () => import(/* webpackChunkName: "nopage" */ '../page/404.vue') }
]
export default routes