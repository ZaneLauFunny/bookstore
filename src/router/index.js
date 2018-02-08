import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Category from '@/page/category/Category'
import Cart from '@/page/cart/Cart'
import Me from '@/page/me/Me'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/category',
            name: 'Category',
            component: Category
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/me',
            name: 'Me',
            component: Me
        },
        
    ],
    linkActiveClass: 'acitve'
})
