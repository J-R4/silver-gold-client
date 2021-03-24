<template>
  <div
    class="box is-centered is-vcentered is-mobile"
    style="vertical-align: middle;text-align: center; justify-content: center; align-items: center; align-content: center; box-shadow: 0px 0px 1px rgb(211,211,211);"
  >
    <h1
      class="title is 3"
      style="margin-bottom:0px;"
    >Our Collection</h1>
    <div class="column is-narrow">
      <!-- ROOM CARDS -->
      <div
        class="column is-centered is-main-content"
        style="vertical-align: middle;text-align: center; justify-content: center; align-items: center; align-content: center;"
      >
        <div class="
        container
        is-widescreen">
          <div
            id="main-columns"
            class="columns is-multiline"
          >
            <div
              id="child-columns"
              class="card"
              v-for="prod in showProducts"
              :key="prod.id"
              style="margin: 50px; padding:20px;"
            >
              <div
                class=""
                style="height: 60vh;width: 17vw;"
              >
                <p style="text-align: center;">
                  <strong style="font-size: 21px;"> {{prod.name}} </strong>
                </p>
                <i> stock: {{prod.stock}}</i>
                <p>
                  <span style="font-size: 17px;"> Rp. {{prod.price}},- </span>
                </p>

                <img
                  :src="prod.image_url"
                  class="is-rounded"
                  style="height: 225px; width: 225px;"
                >

                <div>
                  <footer class="card-footer">
                    <a
                      @click="addToWish(prod.id)"
                      class="card-footer-item"
                      style="color:black;"
                    ><i class="fas fa-heart"></i></a>
                    <a
                      @click="cartForm = !cartForm"
                      class="card-footer-item"
                      style="color:black;"
                    ><i class="fas fa-cart-arrow-down"></i></a>
                    <a
                      @click="buyForm = !buyForm"
                      class="card-footer-item"
                      style="color:black;"
                    ><i class="fas fa-money-bill-wave"></i></a>
                  </footer>
                  <!-- select -->
                  <div
                    v-if="buyForm === true && cartForm === false"
                    class=""
                    style="margin: 0px; padding: 0px;"
                  >
                    <input
                      v-model="qty"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      :max="prod.stock"
                    >
                    <input
                      @click="buy(prod.id)"
                      type="button"
                      value="Buy"
                    >
                  </div>
                  <!-- select -->
                  <!-- select cart -->
                  <div
                    v-if="cartForm === true && buyForm === false"
                    class=""
                    style="margin: 0px; padding: 0px;"
                  >
                    <input
                      v-model="qty"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      :max="prod.stock"
                    >
                    <input
                      @click="addToCart(prod.id)"
                      type="button"
                      value="Add to Cart"
                    >
                  </div>
                  <!-- select -->
                </div>
              </div>
            </div>
            <!-- END ROOM CARDS -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'products',
  data () {
    return {
      toggle: false,
      id: 0,
      buyForm: false,
      qty: 0,
      cartForm: false,
    }
  },
  methods: {
    buy(id){
      //
    },
    addToCart(id){
      this.$store.dispatch('addCart',{ProductId: id,quantity: this.qty})
      this.cartForm = false
    },
    addToWish(id){
      //
    },
  },
  computed: {
    ...mapState({
      showProducts: 'products'
    })
  },
  created () {
    this.$store.dispatch('getAllProduct')
  }
}
</script>

<style>
</style>
