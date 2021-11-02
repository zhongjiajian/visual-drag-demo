import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'PageList',
        component: () => import('@/views/Pages'),
    },
    {
        path: '/Home/:id',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/Item/:env/:id',
        name: 'Item',
        component: () => import('@/views/Item'),
    },
]

export default new Router({
    routes,
})
