<template>
  <div
    class="box"
    style="margin-bottom:20px;"
  >
    <!-- CART CARD -->
    <div
      class="card"
      v-if="hRouter === 'cart'"
    >
      <header class="card-header">
        <p class="card-header-title">
          Your Cart
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="table">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="cart in carts"
                  :key="cart.id"
                >
                  <td>{{products[cart.ProductId-1].id}}</td>
                  <td>{{products[cart.ProductId-1].name}}</td>
                  <td>Rp. {{products[cart.ProductId-1].price}},-</td>
                  <td>{{cart.quantity}}</td>
                  <td>
                    <InfoCard
                      :stock="products[cart.ProductId-1].stock"
                      :id="cart.id"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a
          @click="goToTrans"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-list-ul"></i>Transaction History</a>
        <a
          @click="buyAll"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-money-check-alt"></i>Buy All</a>
      </footer>
    </div>
    <!-- CART CARD -->
    <!-- WISH CARD -->
    <div
      class="card"
      v-if="hRouter === 'wish'"
    >
      <header class="card-header">
        <p class="card-header-title">
          Your Wishlist
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="table">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="wishlist in wishlists"
                  :key="wishlist.id"
                >
                  <td>{{products[wishlist.ProductId-1].id}}</td>
                  <td>{{products[wishlist.ProductId-1].name}}</td>
                  <td>Rp. {{products[wishlist.ProductId-1].price}},-</td>
                  <td>
                    <WishCard :id="wishlist.id" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a
          @click="goToTrans"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-list-ul"></i>Transaction History</a>
        <a
          @click="allToCart"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-cart-arrow-down"></i>Add All to Cart</a>
      </footer>
    </div>
    <!-- WISH CARD -->
    <!-- TRANS CARD -->
    <div
      class="card"
      v-else-if="hRouter === 'trans'"
    >
      <header class="card-header">
        <p class="card-header-title">
          Your Transaction History
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="table">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Time of Purchase</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="trans in transactions"
                  :key="trans.id"
                >
                  <td>{{products[trans.ProductId-1].id}}</td>
                  <td>{{products[trans.ProductId-1].name}}</td>
                  <td>Rp. {{products[trans.ProductId-1].price}},-</td>
                  <td>{{trans.date}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a
          @click="goToWish"
          class="card-footer-item"
          style="color:black;"
        ><i class="far fa-heart"></i></a>
        <a
          @click="goToCart"
          class="card-footer-item"
          style="color:black;"
        ><i class="fab fa-opencart"></i></a>
      </footer>
    </div>
    <!-- TRANS CARD -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InfoCard from '@/components/InfoCard.vue'
import WishCard from '@/components/WishCard.vue'

export default {
  name: `Info`,
  components:{
    InfoCard, WishCard
  },
  data () {
    return {
      theId: '',
    }
  },
  methods:{
    goToTrans(){ 
      this.$store.commit('hRouter','trans')
    },
    goToWish(){ 
      this.$store.commit('hRouter','wish')
    },
    goToCart(){ 
      this.$store.commit('hRouter','cart')
    },
    allToCart () {
      const all = this.wishlists

      all.forEach(el => {
        this.$store.dispatch('wishToCart',{ProductId: el.ProductId, quantity: 1})
        this.$store.dispatch('deleteWish',el.id)
      });

      this.$store.commit('hRouter','cart')
    },
    buyAll() {
      const all = this.carts

      all.forEach(el => {
        this.$store.dispatch('cartToTrans',{ProductId: el.ProductId})
        this.$store.dispatch('deleteCart',el.id)
      });

      this.$store.commit('hRouter','trans')
    },
  },
  computed: {
    ...mapState(['hRouter','carts','products','wishlists','transactions'])
  },
  created (){
    this.$store.dispatch('getAllCart')
  }
}
</script>

<style>
</style>