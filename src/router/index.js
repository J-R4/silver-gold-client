import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/login.vue'

import Products from '../views/Products.vue'
import EditProd from '../views/EditProd.vue'
import AddProd from '../views/AddProd.vue'

import Banners from '../views/Banners.vue'
import EditBan from '../views/EditBan.vue'
import AddBan from '../views/AddBan.vue'

import Categories from '../views/Categories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/addProd',
    name: 'Add Product',
    component: AddProd
  },
  {
    path: '/editProd',
    name: 'Edit Product',
    component: EditProd
  },
  {
    path: '/banners',
    name: 'Banners',
    component: Banners
  },
  {
    path: '/addBan',
    name: 'Add Banner',
    component: AddBan
  },
  {
    path: '/editBan',
    name: 'Edit Banner',
    component: EditBan
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('access_token')) next({ name: 'login' })
  else if (localStorage.getItem('access_token') && to.name === 'login') next({ name: 'home' })
  else next()
})

export default router
