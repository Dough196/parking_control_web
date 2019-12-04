<template>
  <div class="col-2">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="logout">Cerrar sesión</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style></style>
