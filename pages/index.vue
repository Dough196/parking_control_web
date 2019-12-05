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
        <div v-if="user.reservas.length">
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
            <!-- <a href="#" class="list-group-item list-group-item-action active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a> -->
          </div>
          
        </div>
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
  methods: {}
}
</script>

<style>
  .bg-colorheader {
    background: #98094D;

  }

</style>
