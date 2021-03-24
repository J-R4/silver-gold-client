<template>
  <div>
    <section>
      <b-carousel
        :indicator="indicator"
        :indicator-background="indicatorBackground"
        :indicator-inside="indicatorInside"
        :indicator-mode="indicatorMode"
        :indicator-position="indicatorPosition"
        :indicator-style="indicatorStyle"
      >
        <b-carousel-item
          v-for="carousel in carousels"
          :key="carousel.id"
        >
          <section :class="`hero is-medium is-${carousel.color}`">
            <div
              class="hero-body"
              style="padding: 0px;"
            >
              <img
                class=""
                :src="carousel.image_url"
                style="width: 1650px; height: 340px; border-radius: 20px; box-shadow: 0px 0px 1px rgb(211,211,211);"
              >
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'banners',
  data () {
    return {
      indicator: false,
      indicatorBackground: false,
      indicatorInside: false,
      indicatorMode: 'hover',
      indicatorPosition: 'is-bottom',
      indicatorStyle: 'is-dots'
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      carousels: 'banners'
    })
  },
  created () {
    this.$store.dispatch('getAllBanner')
  }
}
</script>

<style>
</style>
