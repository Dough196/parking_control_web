<template>
  <div class="bg">
    <b-container fluid class="d-flex justify-content-center h-100 w-100">
      <b-row align-v="center">
        <div>
          <b-card
            class="n-radius"
            border-variant="danger"
            header="Credenciales"
            header-bg-variant="danger"
            header-text-variant="white"
            align="start"
          >
            <b-card-body>
              <b-card-sub-title class="mb-2">Nombres:</b-card-sub-title>
              <b-card-text>
                Fulano de Tal
              </b-card-text>
              <b-card-sub-title class="mb-2">Carné:</b-card-sub-title>
              <b-card-text>
                25-1234-6789
              </b-card-text>
            </b-card-body>
          </b-card>
          <b-card
            class="n-radius"
            border-variant="danger"
            header="Estacionamiento"
            header-bg-variant="danger"
            header-text-variant="white"
            align="start"
          >
            <b-card-body>
              <b-card-sub-title class="mb-2">Estacionamiento asignado:</b-card-sub-title>
              <b-card-text>
                Polideportivo UTEC
              </b-card-text>
              <b-card-sub-title class="mb-2">Disponibilidad de Estacionamiento:</b-card-sub-title>
              <b-card-text class="text-success">
                Disponible
              </b-card-text>
            </b-card-body>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  justify-content: center;
}

.bg {
  /* Full height */
  height: 100vh;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.color-utec {
  background: #98094D
}

.n-radius {
  border-radius: 0;
}
</style>