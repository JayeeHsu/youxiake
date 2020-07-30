import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../components/home/Home'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/city',
        name: 'city',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/city/City.vue')
    },
    {
        path: '/details',
        name: 'details',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/details/Details.vue')
    },
]

const router = new VueRouter({
    mode: 'hash',//原来是'history'
    base: process.env.BASE_URL,
    routes,
})

export default router
