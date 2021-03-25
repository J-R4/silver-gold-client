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
      <!-- Product CARDS -->
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

                <ProductCard
                  :Id="prod.id"
                  :Stock="prod.stock"
                />
              </div>
            </div>
            <!-- END Product CARDS -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'

export default {

  name: 'products',
  components: {
    ProductCard
  },
  data () {
    return {
      id: 0
    }
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
