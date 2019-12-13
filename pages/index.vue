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
        <div v-if="edificio">
          <b>Edificio</b>
          <div class="list-group">
            <div class="list-group-item">
              <div class="d-flex align-items-center edificio">
							    <font-awesome-icon :icon="['fas', 'building']" :class="[edificio.num_disponible === 0 ? 'not-available' : 'is-available', 'big']" />
                  <div class="info">
                      <h6 class="card-subtitle mb-2 text-muted">Nombre</h6>
                      <p class="card-text">{{ edificio.nombre }}</p>
                      <h6 class="card-subtitle mb-2 text-muted">Disponible</h6>
                      <p class="card-text">{{ edificio.num_disponible }}</p>
                      <h6 class="card-subtitle mb-2 text-muted">Disponible</h6>
                      <p class="card-text">{{ edificio.num_ocupado }}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  v-if="isVigilant" class="card-footer d-flex justify-content-around">
        <nuxt-link class="btn color-utec text-white" to="/vigilante/validar-entrada">Validar entrada</nuxt-link>
        <nuxt-link class="btn color-utec text-white" to="/vigilante/validar-salida">Validar salida</nuxt-link>
        <!-- <font-awesome-icon :icon="['fas', 'user']" /> -->
      </div>
      <div  v-if="user.reservas" class="card-footer d-flex justify-content-center">
        <nuxt-link class="btn color-utec text-white" to="/consultar-parqueo">Consultar parqueo</nuxt-link>
        <!-- <font-awesome-icon :icon="['fas', 'user']" /> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      edificio: null
    }
  },
  components: {},
  mounted() {
    this.consultarEdificio()
  },
  methods: {
    consultarEdificio() {
      if (this.user.edificios) {
        this.$axios.get(`/edificios/${this.user.edificios[0].id}`)
          .then((r) => {
              if (r.status === 200) {
                  this.edificio = r.data.edificio
              }
          })  
      }
    }
  }
  
}
</script>

<style>
  .bg-colorheader {
    background: #98094D;

  }
  .big {
      font-size: 100px;
  }

  .not-available {
      color: red;
  }

  .is-available {
      color: green;
  }


</style>
