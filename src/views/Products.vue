<template>
  <div
    class="columns is-centered is-vcentered is-mobile"
    style="vertical-align: middle;text-align: center; justify-content: center; align-items: center; align-content: center; margin-top: 20px;"
  >
    <div class="column is-narrow">
      <table
        class="table is-striped"
        style=""
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Product Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="prod in showProducts"
            :key="prod.id"
          >
            <td>{{prod.id}}</td>
            <td>{{prod.name}}</td>
            <td>
              <figure class="image"><img
                  :src="prod.image_url"
                  class="is-rounded"
                  style="height: 250px; width: 250px;"
                ></figure>
            </td>
            <td>Rp. {{prod.price}},-</td>
            <td>{{prod.stock}}</td>
            <td><a
                @click="editProd(prod.id)"
                href="#"
              >
                <router-link to="/editProd">Edit</router-link>
              </a> <a
                @click="deleteProd(prod.id)"
                href="#"
              >Delete</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'products',
  data () {
    return {
      id: 0
    }
  },
  methods: {
    editProd (id) {
      this.$store.dispatch('selectedId', id)
    },
    deleteProd (id) {
      this.$store.dispatch('deleteProduct', id)
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
