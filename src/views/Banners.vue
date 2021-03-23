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
            <th>Title</th>
            <th>Banner Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="ban in showBanners"
            :key="ban.id"
          >
            <td>{{ban.id}}</td>
            <td>{{ban.title}}</td>
            <td>
              <figure class="image"><img
                  :src="ban.image_url"
                  class="is-rounded"
                  style="height: 400px; width: 1000px;"
                ></figure>
            </td>
            <td>{{ban.status}}</td>
            <td><a
                @click="editBan(ban.id)"
                href="#"
              >
                <router-link to="/editBan">Edit</router-link>
              </a> <a
                @click="deleteBan(ban.id)"
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
  name: 'banners',
  methods: {
    editBan (id) {
      this.$store.dispatch('selectedId', id)
    },
    deleteBan (id) {
      this.$store.dispatch('deleteBanner', id)
    }
  },
  computed: {
    ...mapState({
      showBanners: 'banners'
    })
  },
  created () {
    this.$store.dispatch('getAllBanner')
  },
  mounted () {
    this.$store.dispatch('getAllBanner')
  }
}
</script>

<style>
</style>
