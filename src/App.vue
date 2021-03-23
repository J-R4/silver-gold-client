<template>
  <div id="app">
    <Navbar v-if="isLogin === true" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'sgApp',
  data () {
    return {
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapState(['isLogin'])
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('access', true)
    } else {
      this.$store.dispatch('access', false)
    }
  }
}
</script>

<style>
html {
  background-image: url("https://silverandgold.s3-ap-southeast-1.amazonaws.com/wallpaper/wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-attachment: fixed;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Buenard", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #cecece;
}
</style>
