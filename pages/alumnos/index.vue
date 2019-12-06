<template>
  <div class="bg">
    <b-container fluid class="d-flex justify-content-center h-100 w-100">
      <b-row align-v="center">
        <!-- Tarjeta de informacion -->
        <div>
          <div class="card border-utec mb-3" style="width: 28rem;">
            <div class="card-header color-utec text-white">Header</div>
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Nombres</h6>
              <p
                class="card-text"
              >Fulano de Tal</p>
              <h6 class="card-subtitle mb-2 text-muted">Carné</h6>
              <p
                class="card-text"
              >25-7890-123</p>
            </div>
            <div class="card-header color-utec text-white">Estacionamiento</div>
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Estacionamiento Asignado</h6>
              <p
                class="card-text"
              >Polideportivo UTEC</p>
              <h6 class="card-subtitle mb-2 text-muted">Disponibilidad de Estacionamiento</h6>
              <p
                class="card-text text-success"
              >Disponible</p>
            </div>
          </div>
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
  background: #98094d;
}

.border-utec {
  border: #98094d solid 1px;
}
</style>