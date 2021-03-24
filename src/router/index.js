import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Welcome' && !localStorage.getItem('access_token')) next({ name: 'Welcome' })
  else if (localStorage.getItem('access_token') && to.name === 'Welcome') next({ name: 'Home' })
  else next()
})

export default router
