<template>
  <div class="">
    <Products />
  </div>
</template>

<script>
import Products from '@/views/Products.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Products
  },
  created () {
    this.$router.push('/products')
  }
}
</script>
