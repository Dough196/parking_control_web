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
						<div class="card-header color-utec text-white">Reservar estacionamientos</div>
						<div class="card-body">
							<form @submit.prevent="onSubmit">
								<h6 class="card-subtitle mb-2 text-muted">Usuario</h6>
								<div class="form-group seleccionador">
								<Multiselect v-model="selectedUser" :options="users" :custom-label="nombreCompleto" placeholder="Seleccionar..." label="nombres" track-by="nombres" :show-labels="false" :allow-empty="false"></Multiselect>
								</div>
								<!-- Seleccionador de zona de estacionar -->
								<h6 class="card-subtitle mb-2 text-muted">Edificio</h6>
								<div class="form-group seleccionador">
								<Multiselect v-model="selectedBuilding" :options="buildings" placeholder="Seleccionar..." label="nombre" track-by="nombre" :show-labels="false" :allow-empty="false"></Multiselect>
								</div>

								<!-- Seleccionador de cantidad de estacionamientos -->
								<h6 class="card-subtitle mb-2 text-muted mt-3">Cantidad de estacionamientos</h6>
								<div class="form-group">
									<input
										v-model="form.cantidad"
										type="number"
										class="form-control"
										placeholder="Cantidad"
										aria-label="Cantidad"
										required
									/>
								</div>
								<h6 class="card-subtitle mb-2 text-muted mt-3">Fecha</h6>
								<div class="form-group">
									<input
										v-model="form.fecha"
										type="date"
										class="form-control"
										placeholder="Fecha"
										aria-label="Fecha"
										required
									/>
								</div>
								<!-- Seleccionador de horario -->
								<h6 class="card-subtitle mb-2 text-muted mt-3">Hora entrada</h6>
								<div class="form-group">
								<select v-model="form.hora_entrada" class="form-control" required>
									<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
								</select>
								</div>
								<h6 class="card-subtitle mb-2 text-muted mt-3">Hora salida</h6>
								<div class="form-group">
								<select v-model="form.hora_salida" class="form-control" required>
									<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
								</select>
								</div>
								<!-- Boton para aceptar los cambios -->
								<div class="d-flex mt-3">
									<button type="submit" class="btn color-utec text-white">Aceptar</button>
								</div>
							</form>
                        
						</div>

                        <!-- Seccion de descarga de excel -->
						<div class="card-header color-utec text-white">Descargar plantilla Excel</div>
						<div class="card-body">

							<!-- Boton para aceptar los cambios -->
							<div class="d-flex justify-content-center mt-3">
								<button type="button" class="btn boton-color text-black">seleccionar archivo...</button>
								<button type="button" class="btn color-utec text-white ml-2">Subir archivo</button>
							</div>
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
			users: [],
			selectedUser: null,
			buildings: [],
			selectedBuilding: null,
			horarios: [
				{
					value: null,
					text: 'Seleccione...'
				},
				{
					value: '06:30',
					text: '06:30 AM'
				},
				{
					value: '07:00',
					text: '07:00 AM'
				},
				{
					value: '08:00',
					text: '08:00 AM'
				},
				{
					value: '09:30',
					text: '09:30 AM'
				},
				{
					value: '10:00',
					text: '10:00 AM'
				},
				{
					value: '11:00',
					text: '11:00 AM'
				},
				{
					value: '13:00',
					text: '01:00 PM'
				},
				{
					value: '14:30',
					text: '02:30 PM'
				},
				{
					value: '16:00',
					text: '04:00 PM'
				},
				{
					value: '18:30',
					text: '06:30 PM'
				},
				{
					value: '18:40',
					text: '06:40 PM'
				},	
				{
					value: '20:10',
					text: '08:10 PM'
				}
			],
			form: {
				user_id: 0,
				edificio_id: 0,
				fecha: null,
				hora_entrada: null,
				hora_salida: null,
				cantidad: null
			}
		}
	},
    mounted() {
		this.fetchPersonal()
		this.fetchTeachers()
		this.fetchBuildings()
	},
    methods: {
        nombreCompleto({ nombres, apellidos }) {
			return `${nombres} ${apellidos}`
		},
		async fetchPersonal() {
            let { data } = await this.$axios.get('/users-por-rol/personal-admin')
			this.users = data.usuarios
		},
		async fetchTeachers() {
            let { data } = await this.$axios.get('/users-por-rol/docente')
			this.users = data.usuarios
		},
		async fetchBuildings() {
			let { data } = await this.$axios.get('/edificios')
            this.buildings = data.edificios
		},
		onSubmit() {
			console.log(this.form)
			if (!this.selectedUser) {
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
			} else if (parseInt(this.form.cantidad) > this.selectedBuilding.num_parqueos) {
				this.$bvToast.toast(`La cantidad no puede ser mayor que la cantidad de parqueos del edificio`, {
					title: `ERROR`,
					toaster: 'b-toaster-top-center',
					variant: 'danger',
					solid: true
				})
			} else {
				this.form.user_id = this.selectedUser.id
				this.form.edificio_id = this.selectedBuilding.id
				console.log('fx2')
				this.$axios.post('reservar-parqueo', this.form)
					.then((r) => {
						if (r.status === 200) {
							this.$bvToast.toast(`Reserva creada exitosamente`, {
								title: `EXITO`,
								toaster: 'b-toaster-top-center',
								variant: 'success',
								solid: true
							})
							this.selectedUser = null
							this.selectedBuilding = null
							this.form.user_id = 0
							this.form.edificio_id = 0
							this.form.fecha = null
							this.form.hora_entrada = null
							this.form.hora_salida = null
							this.form.cantidad = null
						}
					})
					.catch((e) => {
						let text = ''
						if (e.response.status === 422) {
							text = e.response.data.data[Object.keys(e.response.data.data)[0]][0]
						} else {
							text = e.response.data.error
						}
						this.$bvToast.toast(`${text}`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					})
			}
        }
    }

}
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