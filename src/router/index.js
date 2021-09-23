import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/Home/:id',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/PageList',
        name: 'PageList',
        component: () => import('@/views/Pages'),
    },
]

export default new Router({
    routes,
})
