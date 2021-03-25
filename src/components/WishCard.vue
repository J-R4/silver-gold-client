<template>
  <div>
    <!-- select -->
    <div
      class=""
      style="margin: 0px; padding: 0px;"
    >
      <button @click="begone(id)">delete</button>
    </div>
    <!-- select -->
  </div>
</template>

<script>
export default {
  name:`InfoCard`,
  data () {
    return {
      qty: 0
    }
  },
  props: ['stock','id'],
  methods: {
    toCart() {
      //
    },
    begone(id){
      this.$store.dispatch('deleteWish',id)
    }  
  }
}
</script>

<style>
</style>