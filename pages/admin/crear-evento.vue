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
						<div class="card-header color-utec text-white">Crear evento</div>
						<div class="card-body">
							
                            <form @submit.prevent="onSubmit">
								<!-- Seleccionador de zona de estacionar -->
								<h6 class="card-subtitle mb-2 text-muted">Edificio</h6>
								<div class="form-group seleccionador">
								<Multiselect v-model="selectedBuilding" :options="buildings" placeholder="Seleccionar..." label="nombre" track-by="nombre" :show-labels="false" :allow-empty="false"></Multiselect>
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
								<h6 class="card-subtitle mb-2 text-muted mt-3">Hora entrada</h6>
								<div class="form-group">
									<input
										v-model="form.hora_entrada"
										type="time"
										class="form-control"
										placeholder="Hora entrada"
										aria-label="Hora entrada"
										required
									/>
								</div>
								<h6 class="card-subtitle mb-2 text-muted mt-3">Hora salida</h6>
								<div class="form-group">
									<input
										v-model="form.hora_salida"
										type="time"
										class="form-control"
										placeholder="Hora salida"
										aria-label="Hora salida"
										required
									/>
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

								<h6 class="card-subtitle mb-2 text-muted mt-3">Comentario</h6>
								<div class="form-group">
									<textarea
										v-model="form.comentario"
										class="form-control"
										placeholder="Comentario"
										aria-label="Comentario"
										rows="3"
									></textarea>
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
				edificio_id: 0,
				fecha: null,
				hora_entrada: null,
				hora_salida: null,
				cantidad: null,
				comentario: null
			}
		}
	},
    mounted() {
		this.fetchBuildings()
	},
    methods: {
        async fetchBuildings() {
			let { data } = await this.$axios.get('/edificios')
            this.buildings = data.edificios
		},
		onSubmit() {
			console.log(this.form)
			if (!this.selectedBuilding) {
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
				this.form.edificio_id = this.selectedBuilding.id
				this.$axios.post('crear-evento', this.form)
					.then((r) => {
						if (r.status === 200) {
							this.$bvToast.toast(`Evento creado exitosamente`, {
								title: `EXITO`,
								toaster: 'b-toaster-top-center',
								variant: 'success',
								solid: true
							})
							this.selectedBuilding = null
							this.form.edificio_id = 0
							this.form.fecha = null
							this.form.hora_entrada = null
							this.form.hora_salida = null
							this.form.cantidad = null
							this.form.comentario = null
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