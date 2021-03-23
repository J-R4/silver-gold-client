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

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/products">Home</router-link>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <router-link to="/products">Products</router-link>
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                <router-link to="/products">Products</router-link>
              </a>
              <a class="navbar-item">
                <router-link to="/addProd">Add Product</router-link>
              </a>
            </div>
          </div>

          <div class="navbar-item dropdown is-hoverable is-black">
            <a class="navbar-link">
              <router-link to="/banners">Banners</router-link>
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                <router-link to="/banners">Banners</router-link>
              </a>
              <a class="navbar-item">
                <router-link to="/addBan">Add Banner</router-link>
              </a>
            </div>
          </div>
          <a class="navbar-item">
            <router-link to="/categories">Sort by Category (Product)</router-link>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                class="button is-black"
                @click.prevent="logout"
              >
                <strong>Logout</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
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
  color: #cecece !important;
}
</style>
