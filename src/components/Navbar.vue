<template>
  <div>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="../assets/gold.png"
            alt="sglogo"
          >
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <a class="navbar-item">
            <span>silver&gold</span>
          </a>
          <span class="navbar-item">
            <time :datetime="time"><i>{{time}}</i></time>
          </span>
        </div>

        <div class="navbar-end">
          <div
            class="navbar-item"
            v-if="isLogin === true"
          >
            <div class="buttons">
              <a
                class="button is-black"
                @click.prevent="logout"
              >
                <strong>Logout</strong>
              </a>
            </div>
          </div>
          <div
            class="navbar-item"
            v-else-if="isLogin === false"
          >
            <div class="buttons">
              <a
                class="button is-black"
                @click.prevent="login"
              >
                <strong>Login</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'navbar',
  computed: {
    ...mapState(['isLogin']),
    time() {
            const dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: this.enableSeconds ? 'numeric' : undefined,
                timezone: 'UTC'
            })
            return dtf.format(new Date())
        }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    login () {
      this.$store.commit('wRouter',true)
      this.router.push('/welcome')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: black;
}
.navbar-start :hover {
  color: #ddd2b6 !important;
}
</style>
