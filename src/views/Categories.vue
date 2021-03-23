<template>
  <div>
    <div
      class="control has-icons-left columns is-centered"
      style="padding-top: 50px;"
    >
      <label class="label">Category</label>
      <div class="select is-link">
        <span class="icon is-small is-left">
          <i class="fas fa-align-justify"></i>
        </span>
        <select v-model="catId">
          <option
            v-for="cat in categories"
            :key="cat.id"
            :value="cat.id"
          >{{cat.category}}</option>
        </select>
        <button>
          <a
            @click="sort"
            href="#"
          >Sort</a>
        </button>
      </div>
    </div>
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
              v-for="prod in showByCategory"
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'categories',
  data () {
    return {
      catId: 0
    }
  },
  methods: {
    sortBy () {
      this.$store.dispatch('sortProducts', this.catId)
    }
  },
  computed: {
    ...mapState({
      allCategory: 'categories',
      showByCategory: 'sorted'
    })
  },
  created () {
    this.$store.dispatch('getCategories')
    this.$store.dispatch('sortProducts', this.catId)
  }
}
</script>

<style>
</style>
