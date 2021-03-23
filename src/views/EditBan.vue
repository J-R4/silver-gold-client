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
              Edit Banner
            </p>
          </div>

          <div class="field">
            <label class="label">Title</label>
            <div class="control has-icons-left">
              <input
                v-model="title"
                class="input"
                id="title"
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

            <div class="control has-icons-left">
              <label class="label">Status</label>
              <div class="select is-link">
                <span class="icon is-small is-left">
                  <i class="fas fa-align-justify"></i>
                </span>
                <select v-model="status">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="button is-black"
            @click.prevent="editOneBan"
          >Edit Banner</button>
          <button
            id="link-register-reg"
            class="button is-white"
            style="border-color:grey;"
          >
            <router-link to="/banners">Cancel</router-link>
          </button>
          <br><br>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editBan',
  data () {
    return {
      imageURL: '',
      title: '',
      status: ''
    }
  },
  methods: {
    editOneBan () {
      this.$store.dispatch('editBanner', {
        imageURL: this.imageURL,
        title: this.title,
        status: this.status
      })
      this.$router.push('/banners')
    }
  }
}
</script>

<style>
</style>
