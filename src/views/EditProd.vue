<template>
  <div>
    <div
      class="column"
      style="display: flex; justify-content: center; align-items: center; align-content: center; margin-top: 10px;"
    >
      <div style="display: flex; justify-content: center; align-items: center; align-content: center;">
        <form
          class="box"
          style="background-color: white; box-shadow: 0px 0px 20px rgb(211,211,211);"
        >
          <div>
            <p style="margin: 0px 0px 10px 0px;">
              Edit Product
            </p>
          </div>

          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input
                v-model="name"
                class="input"
                id="name"
                type="text"
                placeholder="e.g. Love Somebody"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-prescription-bottle"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Image URL</label>
            <div class="control has-icons-left">
              <input
                v-model="imageURL"
                class="input"
                id="imageURL"
                type="text"
                placeholder="e.g. YouAreLoved.com/images/1.jpg"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-link"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Price</label>
            <div class="control has-icons-left">
              <input
                v-model="price"
                class="input"
                id="price"
                type="text"
                placeholder="1000000"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-dollar-sign"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Stock</label>
            <div class="control has-icons-left">
              <input
                v-model="stock"
                class="input"
                id="stock"
                type="text"
                placeholder="1000000"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-list-ol"></i>
              </span>
            </div>
          </div>

          <div class="field">

            <div class="control has-icons-left">
              <label class="label">Category</label>
              <div class="select is-link">
                <span class="icon is-small is-left">
                  <i class="fas fa-align-justify"></i>
                </span>
                <select v-model="category">
                  <option>Silver</option>
                  <option>Gold</option>
                  <option>Relic</option>
                  <option>Etc</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="button is-black"
            @click.prevent="editOne"
          >Edit Product</button>
          <button
            id="link-register-reg"
            class="button is-white"
            style="border-color:grey;"
          >
            <router-link to="/products">Cancel</router-link>
          </button>
          <br><br>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editProd',
  data () {
    return {
      imageURL: '',
      name: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    editOne () {
      this.$store.dispatch('editProduct', {
        imageURL: this.imageURL,
        name: this.name,
        price: this.price,
        stock: this.stock
      })
    }
  }
}
</script>

<style>
</style>
