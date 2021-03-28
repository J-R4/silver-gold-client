import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router/index.js'
import { ToastProgrammatic as Toast } from 'buefy'
// const baseURL = 'https://silver-and-gold-admin.herokuapp.com/'
// const baseURL = 'http://localhost:3000/' // for local dev only

const baseURL = 'https://silver-and-gold.herokuapp.com/'

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
    hRouter: 'wish',
    carts: [],
    wishlists: [],
    transactions: []
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
    showAllCart(state, payload) {
      state.carts = payload
    },
    showAllWish(state, payload) {
      state.wishlists = payload
    },
    showAllTrans(state, payload) {
      state.transactions = payload
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
      state.hRouter = payload
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
          Toast.open({duration: 2000,
            message: `You account has been created successfully!`,
            position: 'is-top',
            type: 'is-warning'})
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
          Toast.open({duration: 2000,
            message: `You has been logged in successfully!`,
            position: 'is-top',
            type: 'is-warning'})
          router.push('/')
        })
        .catch((err) => {
          Toast.open({duration: 2000,
            message: err.message ? err.message : `Your email/password is wrong!`,
            position: 'is-top',
            type: 'is-black'})
          console.log(err)
        })
    },
    logout (context, payload) {
      localStorage.removeItem('access_token')
      context.commit('ACCESS', false)
      context.state.profile = {}
      Toast.open({duration: 2000,
            message: `You has been logout successfully, see you soon!`,
            position: 'is-top',
            type: 'is-warning'})
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
    getOneProduct (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + `products/${payload}`,
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
    // Transaction
    getAllTrans (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + 'trans',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data,'masukthen <<<<<<<<<<')
          context.commit('showAllTrans', data.trans)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addTrans(context, payload) {
      const { ProductId } = payload
      axios({
        method: 'POST',
        url: baseURL + 'trans',
        data: { ProductId },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          Toast.open({duration: 2000,
            message: `You have bought this item successfully!`,
            position: 'is-top',
            type: 'is-warning'
          })
          context.dispatch('getAllTrans')
        })
        .catch((err) => {
          Toast.open({duration: 2000,
            message: `There is something wrong!`,
            position: 'is-top',
            type: 'is-black'})
          console.log(err,'disini <<<<<<<')
        })
    },
    cartToTrans(context, payload) {
      const { ProductId } = payload
      axios({
        method: 'POST',
        url: baseURL + 'trans',
        data: { ProductId, quantity:+quantity },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          context.dispatch('getAllTrans')
        })
        .catch((err) => {
          Toast.open({duration: 2000,
            message: `There is something wrong!`,
            position: 'is-top',
            type: 'is-black'})
          console.log(err,'disini <<<<<<<')
        })
    },
    buyProd (context, payload) {
      const { id, stock } = payload
      axios({
        method: 'PATCH',
        url: baseURL + `products/${id}`,
        data: { stock },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response,'masuk edit trans<<<<<<<<')
          context.dispatch('getAllProduct')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //Cart
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
    wishToCart(context, payload) {
      const { ProductId, quantity } = payload
      axios({
        method: 'POST',
        url: baseURL + 'carts',
        data: { ProductId, quantity:+quantity },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          context.dispatch('getAllCart')
        })
        .catch((err) => {
          Toast.open({duration: 2000,
            message: `There is something wrong!`,
            position: 'is-top',
            type: 'is-black'})
          console.log(err,'disini <<<<<<<')
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
          Toast.open({duration: 2000,
            message: `You have added this ${quantity} of this item in your cart successfully!`,
            position: 'is-top',
            type: 'is-warning'
          })
          context.dispatch('getAllCart')
        })
        .catch((err) => {
          Toast.open({duration: 2000,
            message: `There is something wrong!`,
            position: 'is-top',
            type: 'is-black'})
          console.log(err,'disini <<<<<<<')
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
    //Wishlist
    getAllWish (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + 'wish',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('showAllWish', data.wish)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addWish(context, payload) {
      const { ProductId } = payload
      axios({
        method: 'POST',
        url: baseURL + 'wish',
        data: { ProductId },
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response.data)
          if (response.data.begone) {
            Toast.open({duration: 2000,
              message: `You have remove this item from your wishlist successfully!`,
              position: 'is-top',
              type: 'is-black'
            })
            context.dispatch('getAllWish')
            context.commit('hRouter','wish')
          } else if (response.data.wish){
            Toast.open({duration: 2000,
              message: `You have added this item to your wishlist successfully!`,
              position: 'is-top',
              type: 'is-warning'
            })
            context.dispatch('getAllWish')
            context.commit('hRouter','wish')
          }
        })
        .catch((err) => {
          Toast.open({duration: 2000,
            message: `There is something wrong!`,
            position: 'is-top',
            type: 'is-black'})
          console.log(err,'disini <<<<<<<')
        })
    },
    deleteWish (context, payload) {
      const id = payload
      axios({
        method: 'DELETE',
        url: baseURL + `wish/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then((response) => {
          console.log(response)
          context.dispatch('getAllWish')
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
