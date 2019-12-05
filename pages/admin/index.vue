<template>
<div>
  <!-- <Cabecera></Cabecera> -->
  <div class="container">
    <div class="card mt-5">
      <h5 class="card-header bg-colorheader text-light">Featured</h5>
      <div class="card-body">
        <div v-if="user.nombre || user.apellidos">
          <b>Nombres</b>
          <p>{{ user.nombres + ' ' + user.apellidos }}</p>
        </div>
        <div v-if="user.carnet">
          <b>Carnet</b>
          <p>{{ user.carnet }}</p>
        </div>
        <div v-if="user.email">
          <b>E-mail</b>
          <p>{{ user.email }}</p>
        </div>
        <div v-if="user.num_placa">
          <b>Placa</b>
          <p>{{ user.num_placa }}</p>
        </div>
        <div v-if="user.reservas">
          <b>Reservas</b>
          <div class="list-group">
            <div v-for="reserva in user.reservas" :key="reserva.id" class="list-group-item">
              <h5 class="mb-1">{{ reserva.edificios[0].nombre }}</h5>
              <p v-for="horario in reserva.horarios" :key="horario.id" class="mb-1">
                <b>Día:</b>
                {{ horario.dia }}
                <b>Hora de entrada:</b>
                {{ horario.hora_entrada }}
                <b>Hora de salida:</b>
                {{ horario.hora_salida }}
              </p>
            </div>
          </div>

        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary" type="button" @click="consultar">Consultar parqueo</button>
        <!-- <font-awesome-icon :icon="['fas', 'user']" /> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import Cabecera from "../components/Cabecera.vue"

export default {
  components: {
    //Cabecera
  },
  mounted() {},
  methods: {
    consultar() {
      console.log('f')
    }
  }
  
}
</script>

<style>
  .bg-colorheader {
    background: #98094D;

  }

</style>