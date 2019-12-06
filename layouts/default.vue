<template>
  <div class="layout">
    <Navbar v-if="loggedIn" />
    <nuxt :class="[loggedIn ? 'col-10' : 'col-12']" />
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
    display: flex;
    margin: 0;
  }

</style>
