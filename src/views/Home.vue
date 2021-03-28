<template>
  <div>
    <Navbar />
    <div
      class="container is-centered is-vcentered is-mobile"
      style="vertical-align: middle;text-align: center; justify-content: center; align-items: center; align-content: center; margin-top: 20px;"
    >
      <div class="column is-centered is-vcentered is-mobile">
        <Banner />
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-one-thirds">
            <div>
              <Profile />
            </div>
            <div>
              <Info />
            </div>
          </div>
          <div class="column is-two-thirds">
            <Product />
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import Profile from '@/components/Profile.vue'
import Info from '@/components/Info.vue'
import Product from '@/components/Product.vue'


export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Navbar, Footer, Banner, Profile, Info, Product
  },
  created () {
    this.$store.dispatch('getProfile')
    this.$store.dispatch('getAllProduct')
    this.$store.dispatch('getAllCart')
    this.$store.dispatch('getAllWish')
    // this.$store.dispatch('getAllTrans')
  }
}
</script>

<style>
a:hover {
  background-color: #ddd2b6;
}
</style>
