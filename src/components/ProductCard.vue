<template>
  <div>
    <div>
      <footer class="card-footer">
        <a
          @click="addToWish(Id)"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-heart"></i></a>
        <a
          @click="cartForm = !cartForm"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-cart-arrow-down"></i></a>
        <a
          @click="buyOne(Id)"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-money-bill-wave"></i></a>
      </footer>
      <!-- select cart -->
      <div
        v-if="cartForm === true"
        class=""
        style="margin: 0px; padding: 0px;"
      >
        <input
          v-model="qty"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          :max="Stock"
        >
        <input
          @click="addToCart(Id)"
          type="button"
          value="Add to Cart"
        >
      </div>
      <!-- select -->
    </div>
  </div>
</template>

<script>
export default {
  name: `ProductCard`,
  props: ['Id','Stock'],
  data () {
    return {
      qty: 0,
      buyForm: false,
      cartForm: false,
    }
  },
  methods: {
    buyOne(id){
      this.$store.dispatch('addTrans',{ProductId: id})
    },
    addToCart(id){
      this.$store.dispatch('addCart',{ProductId: id,quantity: this.qty})
      this.cartForm = false
    },
    addToWish(id){
      this.$store.dispatch('addWish',{ProductId: id})
    },
  }
}
</script>

<style>
</style>