<template>
  <div>
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
        :max="stock"
      >
      <input
        @click="edit(id)"
        type="button"
        value="edit"
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
    edit(id){
      this.$store.dispatch('editCart',{id, quantity: this.qty})
    },
    begone(id){
      this.$store.dispatch('deleteCart',id)
    }  
  }
}
</script>

<style>
</style>