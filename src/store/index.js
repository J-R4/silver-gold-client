import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router/index.js'

// const baseURL = 'https://silver-and-gold-admin.herokuapp.com/'
const baseURL = 'http://localhost:3000/' // for local dev only

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    carts: [],
    categories: [],
    sorted: [],
    profile: {},
    isLogin: false,
    readyId: 0,
    wRouter: true,
    hRouter: 'cart',
    carts: []
  },
  mutations: {
    theId (state, payload) {
      state.readyId = payload
    },
    showCategories (state, payload) {
      state.categories = payload
    },
    showSort (state, payload) {
      state.sorted = payload
    },
    showAllProduct (state, payload) {
      state.products = payload
    },
    showAllBanner(state, payload) {
      state.banners = payload
    },
    showAllCart (state, payload) {
      state.carts = payload
    },
    showProfile(state, payload) {
      state.profile = payload
    },
    ACCESS (state, payload) {
      state.isLogin = payload
    },
    wRouter(state, payload) {
      state.wRouter = payload
    },
    hRouter(state, payload) {
      state.wRouter = payload
    }
  },
  actions: {
    access (context, payload) {
      context.commit('ACCESS', payload)
    },
    register(context, payload) {
      const { email, name, password } = payload
      axios({
        method: 'POST',
        url: baseURL + 'register',
        data: { email, name, password },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          context.commit('wRouter', true)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: 'login',
        data: { email, password }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('ACCESS', true)
          context.dispatch('getProfile')
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout (context, payload) {
      localStorage.removeItem('access_token')
      context.commit('ACCESS', false)
      context.state.profile = {}
      router.push('/welcome')
    },
    deleteProfile (context, payload) {
      axios({
        method: 'DELETE',
        url: baseURL + 'profile',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          localStorage.removeItem('access_token')
          context.commit('ACCESS', false)
          context.state.profile = {}
          router.push('/welcome')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getProfile(context, payload) {
      axios({
        method: 'GET',
        url: baseURL + `profile`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('showProfile', data.theUser)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAllProduct (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + 'products',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('showAllProduct', data.product)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAllBanner(context, payload) {
      axios({
        method: 'GET',
        url: baseURL + 'banners',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('showAllBanner', data.banner)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAllCart (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + 'carts',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('showAllCart', data.carts)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const { name, price, stock, category } = payload
      axios({
        method: 'POST',
        url: baseURL + 'products',
        data: { name, image_url: payload.imageURL, price, stock, category },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      const { title, status } = payload
      axios({
        method: 'POST',
        url: baseURL + 'banners',
        data: { title, image_url: payload.imageURL, status },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addCart(context, payload) {
      const { ProductId, quantity } = payload
      axios({
        method: 'POST',
        url: baseURL + 'carts',
        data: { ProductId, quantity:+quantity },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response,'then <<<<<<<<<')
        })
        .catch((err) => {
          console.log(err,'disini <<<<<<<')
        })
    },
    editProduct (context, payload) {
      const { name, price, stock, category } = payload
      console.log(this.state.readyId)
      axios({
        method: 'PUT',
        url: baseURL + `products/${this.state.readyId}`,
        data: { name, image_url: payload.imageURL, price, stock, category },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editBanner (context, payload) {
      const { title, status } = payload
      axios({
        method: 'PUT',
        url: baseURL + `banners/${this.state.readyId}`,
        data: { title, image_url: payload.image_url, status },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editCart (context, payload) {
      const { id, quantity } = payload
      axios({
        method: 'PATCH',
        url: baseURL + `carts/${id}`,
        data: { quantity },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
          context.dispatch('getAllCart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    activateBanner (context, payload) {
      const { id, status } = payload
      axios({
        method: 'PATCH',
        url: baseURL + `banners/${id}`,
        data: { status },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      const id = payload
      axios({
        method: 'DELETE',
        url: baseURL + `products/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteBanner (context, payload) {
      const id = payload
      axios({
        method: 'DELETE',
        url: baseURL + `banners/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
          router.push('/banners')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      const id = payload
      axios({
        method: 'DELETE',
        url: baseURL + `carts/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
          context.dispatch('getAllCart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    selectedId (context, payload) {
      const id = payload
      context.commit('theId', id)
    },
    sortProducts (context, payload) {
      const { catId } = payload
      axios({
        method: 'GET',
        url: baseURL + 'sort',
        headers: { access_token: localStorage.access_token },
        data: { catId }
      })
        .then(({ data }) => {
          context.commit('showSort', data.sort)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCategories(context, payload) {
      axios({
        method: 'GET',
        url: baseURL + 'categories',
        headers: { access_token: localStorage.access_token },
      })
        .then(({ data }) => {
          context.commit('showCategories', data.categories)
        })
        .catch(((err) => {
          console.log(err)
        }))
    }
  },
  modules: {
  }
})
