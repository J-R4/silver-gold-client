import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router/index.js'

const baseURL = 'https://silver-and-gold-admin.herokuapp.com/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    categories: [],
    sorted: [],
    isLogin: false,
    readyId: 0
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
    showAllBanner (state, payload) {
      state.banners = payload
    },
    LOGIN (state, payload) {
      state.isLogin = payload
    },
    LOGOUT (state, payload) {
      state.isLogin = payload
    },
    ACCESS (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    access (context, payload) {
      context.commit('ACCESS', payload)
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
          context.commit('LOGIN', true)
          router.push('/home')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout (context, payload) {
      localStorage.removeItem('access_token')
      context.commit('LOGOUT', false)
      router.push('/login')
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
    getAllBanner (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + 'banners',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data, 'ini dari get all')
          context.commit('showAllBanner', data.banner)
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
          console.log(response)
          router.push('/home')
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
          router.push('/banners')
        })
        .catch((err) => {
          console.log(err)
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
          router.push('/products')
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
          router.push('/products')
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
