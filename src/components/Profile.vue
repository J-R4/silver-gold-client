<template>
  <div
    class="box"
    style="margin-bottom:20px;"
  >
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Welcome Back, {{profile.name}}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <u>silver&gold</u>, has prepared all the <strong>finest</strong> and <strong>unique</strong> collection, just for <i>you</i>. Prepare yourself to be <strong>embraced</strong> and <strong>tangled</strong> by all of the collection radiant.
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <a
          @click="hRouter(wish)"
          class="card-footer-item"
          style="color:black;"
        ><i class="far fa-heart"></i></a>
        <a
          @click="hRouter(cart)"
          class="card-footer-item"
          style="color:black;"
        ><i class="fab fa-opencart"></i></a>
        <a
          @click="deleteAccount"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-user-slash"></i></a>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: `profile`,
  data () {
    return {
    }
  },
  methods: {
    hRouter(route){ 
      this.$commit('hRouter',route)
    },
    deleteAccount(){ // add swal for delete account
      this.$store.dispatch('deleteProfile')
    }
  },
  computed: {
    ...mapState(['profile'])
  }
}
</script>

<style>
</style>