<template>
  <div>
    <!-- This is Form login -->
    <div
      v-if="wRouter === true"
      class=""
      id="form-login"
      style="height: 77vh;"
    >

      <!-- This is Welcoming Title -->
      <div class="">
        <div
          class="container"
          style="display: flex; text-align: center; justify-content: center; align-items: center; align-content: center; margin-bottom: 35px; margin-top: 20px;"
        >

          <div
            class="box"
            style="background-color: white;"
          >
            <img
              alt="Vue logo"
              src="../assets/sg.png"
            >
            <p class="subtitle is-white is-6">Place to find <strong>your precious</strong> and
              <i>to own it.</i>
            </p>

          </div>
        </div>
      </div>
      <!-- This is the end of Welcoming Title -->

      <div
        class=""
        style="display: flex; justify-content: center; align-items: center; align-content: center;"
      >
        <div style="display: flex; justify-content: center; align-items: center; align-content: center;">
          <form
            class="box"
            style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);"
          >
            <div>
              <p style="margin: 0px 0px 10px 0px;">
                Login
              </p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  v-model="email"
                  class="input"
                  id="email"
                  type="email"
                  placeholder="e.g. PogChamp@example.com"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-dove"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  v-model="password"
                  class="input"
                  id="password"
                  type="password"
                  placeholder="********"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-key"></i>
                </span>
              </div>
            </div>

            <button
              type="submit"
              id="login-btn"
              class="button is-black"
              @click.prevent="login"
            >Login</button>
            <button
              type="submit"
              class="button is-white"
              style="border-color:grey;"
              @click.prevent="pageR"
            >Register</button>
            <br><br>
          </form>
        </div>
      </div>
    </div>
    <!-- This is the end of login page -->
    <!-- This is Form register -->
    <div
      v-else-if="wRouter === false"
      class=""
      id="form-login"
      style="height: 77vh;"
    >

      <!-- This is Welcoming Title -->
      <div class="">
        <div
          class="container"
          style="display: flex; text-align: center; justify-content: center; align-items: center; align-content: center; margin-bottom: 35px; margin-top: 20px;"
        >

          <div
            class="box"
            style="background-color: white;"
          >
            <img
              alt="Vue logo"
              src="../assets/sg.png"
            >
            <p class="subtitle is-white is-6">Place to find <strong>your precious</strong> and
              <i>to own it.</i>
            </p>

          </div>
        </div>
      </div>
      <!-- This is the end of Welcoming Title -->

      <div
        class=""
        style="display: flex; justify-content: center; align-items: center; align-content: center;"
      >
        <div style="display: flex; justify-content: center; align-items: center; align-content: center;">
          <form
            class="box"
            style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);"
          >
            <div>
              <p style="margin: 0px 0px 10px 0px;">
                Register
              </p>
            </div>

            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input
                  v-model="nameR"
                  class="input"
                  id="name"
                  type="text"
                  placeholder="e.g. Kirby"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  v-model="emailR"
                  class="input"
                  id="email"
                  type="email"
                  placeholder="e.g. PogChamp@example.com"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-dove"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  v-model="passwordR"
                  class="input"
                  id="password"
                  type="password"
                  placeholder="********"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-key"></i>
                </span>
              </div>
            </div>

            <button
              type="submit"
              class="button is-black"
              @click.prevent="register"
            >Register</button>
            <button
              id="link-register-reg"
              class="button is-white"
              style="border-color:grey;"
              @click.prevent="pageL"
            >Login</button>
          </form>
        </div>
      </div>
    </div>
    <!-- This is the end of register page -->
  </div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
import { mapState } from 'vuex'

export default {
  name: 'login',
  components: {
    GoogleSignInButton
  },
  data () {
    return {
      email: '',
      password: '',
      emailR: '',
      passwordR: '',
      nameR: '',
      params: {
          client_id: "641781171342-18velpmujtc06m2n7gtlbsfcnaqhpj1o.apps.googleusercontent.com"
      },
    }
  },
  computed: {
    ...mapState(['wRouter'])
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    },
    register () {
      this.$store.dispatch('register', { email: this.emailR, password: this.passwordR, name: this.nameR })
    },
    pageR () {
      this.$store.commit('wRouter',false)
    },
    pageL () {
      this.$store.commit('wRouter',true)
    },
    onSignInSuccess (googleUser) {
      this.$store.dispatch('onSignInSuccess',googleUser)
      // <div>
      //   <g-signin-button
      //     class="button is-small is-light"
      //     :params="params"
      //     @success="onSignInSuccess"
      //     @error="onSignInError"
      //   >
      //     <i class="fab fa-google"></i>oogle Sign-in
      //   </g-signin-button>
      // </div>
    },
    onSignInError (error) {
      this.$store.dispatch('onSignInError',error)
    },
  }
}
</script>

<style scoped>
.notAdmin :hover {
  color: #cecece;
}

body {
  overflow-y: hidden !important;
}

.g-signin-button {
  display: inline-block;
  padding: 2px 4px;
  border-radius: 3px;
  background-color: #5e5e5e;
  color: whitesmoke;
}
</style>
