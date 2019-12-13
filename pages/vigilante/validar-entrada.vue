<template>
	<div class="bg">
		<b-container fluid class="d-flex justify-content-center h-100 w-100">
			<b-row align-v="center">
				<!-- Tarjeta de informacion -->
				<div class="card">
					<div class="card-header text-center">UNIVERSIDAD TECNOLOGICA DE EL SALVADOR</div>
					<div class="card-body  p-lg-5">
						<div>
					<div class="card border-utec mb-3 " style="width: 28rem;">
						<div class="card-header color-utec text-white">Asignar estacionamiento</div>
						<div class="card-body">
							<form @submit.prevent="onSubmit">
								<!-- Seleccionador de vigilante -->
								<div class="form-group seleccionador">
									<h6 class="card-subtitle mb-2 text-muted mt-3">Buscar Usuario</h6>
									<div class="d-flex align-items-center">
										<div class="col-8 buscar-usuario">
											<input
												v-model="placa"
												type="text"
												class="form-control"
												placeholder="Placa"
												aria-label="Placa"
											/>
										</div>
										<div class="col-4">
											<button type="button" class="btn btn-primary btn-sm" @click="fetchUsuario">Buscar</button>
										</div>
									</div>
								<!-- <Multiselect v-model="selectedVigilant" :options="vigilants" :custom-label="nombreCompleto" placeholder="Seleccionar..." label="nombres" track-by="nombres" :show-labels="false" :allow-empty="false"></Multiselect> -->
								</div>
								<h6 class="card-subtitle mb-2 text-muted">Usuario</h6>
								<div v-if="usuario.nombres || usuario.apellidos">
									<b>Nombres</b>
									<p>{{ usuario.nombres + ' ' + usuario.apellidos }}</p>
								</div>
								<div v-if="usuario.carnet">
									<b>Carnet</b>
									<p>{{ usuario.carnet }}</p>
								</div>
								<div v-if="usuario.num_placa">
									<b>Placa</b>
									<p>{{ usuario.num_placa }}</p>
								</div>
								<div v-if="usuario.reservas">
									<b>Reservas</b>
									<div class="list-group">
										<div v-for="reserva in usuario.reservas" :key="reserva.id" class="list-group-item">
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

								<!-- Seleccionador de edificio -->
								<h6 class="card-subtitle mb-2 text-muted mt-3">Edificio</h6>
								<div class="form-group">
								<Multiselect v-model="selectedBuilding" :options="buildings" placeholder="Seleccionar..." label="nombre" track-by="nombre" :show-labels="false" :allow-empty="false"></Multiselect>
								</div>
							
								<!-- Boton para aceptar los cambios -->
								<div class="d-flex mt-3">
									<button type="submit" class="btn color-utec text-white">Aceptar</button>
								</div>
                        	</form>
						</div>
					</div>
				</div>
					</div>
					<div class="card-footer text-muted text-center">ATREVÁVONOS A SER MEJORES</div>
				</div>

			</b-row>
		</b-container>
	</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    components: {
		Multiselect
	},
	data() {
		return {
			buildings: [],
			selectedBuilding: null,
			form: {
				user_id: 0,
				edificio_id: 0
			},
			placa: null,
			usuario: {
				nombres: null,
				apellidos: null,
				num_placa: null,
				carnet: null,
				reservas: null
			}
		}
	},
    mounted() {
		this.fetchBuildings()
	},
    methods: {
		async fetchBuildings() {
			let { data } = await this.$axios.get('/lista-edificios')
            this.buildings = data.edificios
		},
		onSubmit() {
			if (!this.usuario.id) {
				this.$bvToast.toast(`Usuario es requerido`, {
					title: `ERROR`,
					toaster: 'b-toaster-top-center',
					variant: 'danger',
					solid: true
				})
			} else if (!this.selectedBuilding) {
				this.$bvToast.toast(`Edificio es requerido`, {
					title: `ERROR`,
					toaster: 'b-toaster-top-center',
					variant: 'danger',
					solid: true
				})
			} else {
				this.form.user_id = this.usuario.id
				this.form.edificio_id = this.selectedBuilding.id
				this.$axios.post('/users/validar-entrada', this.form)
					.then((r) => {
						if (r.status === 200) {
							this.$bvToast.toast(`Validacion de entrada exitosamente`, {
								title: `EXITO`,
								toaster: 'b-toaster-top-center',
								variant: 'success',
								solid: true
							})
							this.$router.push({
								path: "/"
							})
						}
					})
					.catch((e) => {
						let text = ''
						if (e.response.status === 422) {
							text = e.response.data.data[Object.keys(e.response.data.data)[0]][0]
						} else {
							text = e.response.data.message
						}
						this.$bvToast.toast(`${text}`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					})
			}
		},
		fetchUsuario() {
			if (!this.placa) {
				this.$bvToast.toast(`Placa es requerido`, {
					title: `ERROR`,
					toaster: 'b-toaster-top-center',
					variant: 'danger',
					solid: true
				})
			} else {
				this.$axios.get(`/users-por-placa`, {
					params: {
						num_placa: this.placa
					}
				})
				.then((r) => {
					if (r.status === 200) {
						if (!r.data.usuario) {
							this.$bvToast.toast(`No se encontró Usuario`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.usuario = r.data.usuario
						}
					}
				})  
			}
		}
    }

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

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

.boton-color{
	background: rgb(218, 212, 212);

}

.border-utec {
	border: #98094d solid 1px;
}

.color-icon {
	color: #98094d;
}

</style>