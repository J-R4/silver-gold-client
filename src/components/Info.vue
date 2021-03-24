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
                  <td>{{products[cart.UserId].id}}</td>
                  <td>{{products[cart.UserId].name}}</td>
                  <td>Rp. {{products[cart.UserId].price}}</td>
                  <td>{{cart.quantity}}</td>
                  <td>
                    <!-- select -->
                    <div
                      class=""
                      style="margin: 0px; padding: 0px;"
                    >
                      <input
                        v-model="qty"
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        :max="products[cart.UserId].stock"
                      >
                      <input
                        @click="edit"
                        type="button"
                        value="edit"
                      >
                    </div>
                    <!-- select -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div
          class="card-footer-item"
          style="color:black;"
        ></div>
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
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <div
                  v-for="cart in carts"
                  :key="cart.id"
                >
                  <tr
                    v-for="prod in products"
                    :key="prod.id"
                  >
                    <td>{{prod.id}}</td>
                    <td>{{prod.name}}</td>
                    <td>Rp. {{prod.price}}</td>
                    <td>{{cart.quantity}}</td>
                    <td>
                      <!-- select -->
                      <div
                        class=""
                        style="margin: 0px; padding: 0px;"
                      >
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          :max="prod.stock"
                        >
                        <input
                          @click="edit(cart.id)"
                          type="button"
                          value="edit"
                        >
                      </div>
                      <!-- select -->
                    </td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div
          class="card-footer-item"
          style="color:black;"
        ></div>
        <a
          @click="buyAll"
          class="card-footer-item"
          style="color:black;"
        ><i class="fas fa-money-check-alt"></i>Buy All</a>
      </footer>
    </div>
    <!-- WISH CARD -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: `Info`,
  data () {
    return {
      theId: '',
      qty: 0
    }
  },
  methods: {
    buyAll() {
      //
    },
    edit(id){
      this.$store.dispatch('editCart',{id, quantity: this.qty})
    } 
  },
  computed: {
    ...mapState(['hRouter','carts','products'])
  }
}
</script>

<style>
</style>