const routes = [
    { path: '/', component: () => import(/* webpackChunkName: "index" */ '../page/index/index.vue') },
    { path: '/driver', component: () => import(/* webpackChunkName: "driver" */ '../page/driver/index.vue') },
    { path: '/drag', component: () => import(/* webpackChunkName: "drag" */ '../page/drag/index.vue') },
    { path: '/shaking', component: () => import(/* webpackChunkName: "shaking" */ '../page/shaking/index.vue') },
    { path: '/table', component: () => import(/* webpackChunkName: "table" */ '../page/table/index.vue') },
    { path: '*', component: () => import(/* webpackChunkName: "nopage" */ '../page/404.vue') }
]
export default routes