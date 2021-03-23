import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://silver-and-gold-admin.herokuapp.com/'
})

export default instance
