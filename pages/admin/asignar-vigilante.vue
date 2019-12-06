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
								<h6 class="card-subtitle mb-2 text-muted">Nombre del vigilante</h6>
								<div class="form-group seleccionador">
								<Multiselect v-model="selectedVigilant" :options="vigilants" :custom-label="nombreCompleto" placeholder="Seleccionar..." label="nombres" track-by="nombres" :show-labels="false" :allow-empty="false"></Multiselect>
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
			vigilants: [],
			selectedVigilant: null,
			buildings: [],
			selectedBuilding: null,
			form: {
				user_id: 0,
				edificio_id: 0
			}
		}
	},
    mounted() {
		this.fetchVigilants()
		this.fetchBuildings()
	},
    methods: {
        async fetchVigilants() {
            let { data } = await this.$axios.get('/users-por-rol/vigilante')
			this.vigilants = data.usuarios
		},
		async fetchBuildings() {
			let { data } = await this.$axios.get('/lista-edificios')
            this.buildings = data.edificios
		},
		nombreCompleto({ nombres, apellidos }) {
			return `${nombres} ${apellidos}`
		},
		onSubmit() {
			if (!this.selectedVigilant) {
				this.$bvToast.toast(`Vigilante es requerido`, {
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
				console.log(this.selectedBuilding.id)
				console.log(this.selectedVigilant.id)
				this.form.user_id = this.selectedVigilant.id
				this.form.edificio_id = this.selectedBuilding.id
				this.$axios.post('users/asignar-vigilante-edificio', this.form)
					.then((r) => {
						if (r.status === 200) {
							this.$bvToast.toast(`Vigilante asignado exitosamente`, {
								title: `EXITO`,
								toaster: 'b-toaster-top-center',
								variant: 'success',
								solid: true
							})
							this.selectedVigilant = null
							this.selectedBuilding = null
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