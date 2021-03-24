import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://silver-and-gold-admin.herokuapp.com/'
  baseURL: 'http://localhost:3000/' // for local dev only
})

export default instance
