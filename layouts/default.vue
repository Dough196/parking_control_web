<template>
  <div class="layout">
    <Navbar v-if="loggedIn" />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>
  .layout {
    
  }

</style>
