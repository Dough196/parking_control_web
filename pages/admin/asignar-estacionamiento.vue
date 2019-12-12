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
								<h6 class="card-subtitle mb-2 text-muted">Usuario</h6>
								<div class="form-group seleccionador">
								<Multiselect v-model="selectedUser" :options="users" :custom-label="nombreCompleto" placeholder="Seleccionar..." label="nombres" track-by="nombres" :show-labels="false" :allow-empty="false"></Multiselect>
								</div>
								<!-- Seleccionador de zona de estacionar -->
								<h6 class="card-subtitle mb-2 text-muted">Edificio</h6>
								<div class="form-group seleccionador">
								<Multiselect v-model="selectedBuilding" :options="buildings" placeholder="Seleccionar..." label="nombre" track-by="nombre" :show-labels="false" :allow-empty="false"></Multiselect>
								</div>
								<!-- Seleccionador de horario -->
								<h6 class="card-subtitle mb-2 text-muted mt-3">Horario del lunes</h6>
								<div class="d-flex align-items-center">
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora entrada</h6>
										<div class="form-group">
										<select v-model="handlers.hora_entrada_lunes" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora salida</h6>
										<div class="form-group">
										<select v-model="handlers.hora_salida_lunes" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-2">
										<button type="button" class="btn btn-primary btn-sm" @click="pushHorario('lunes')">+</button>
									</div>
								</div>
								<ul v-if="form.hora_entrada_lunes.length" class="list-group">
									<li v-for="( hora, index ) in form.hora_entrada_lunes" :key="index" class="list-group-item d-flex justify-content-around align-items-center">
										<span>{{ form.hora_entrada_lunes[index] }} - {{ form.hora_salida_lunes[index] }}</span>
										<button type="button" class="btn btn-primary btn-sm" @click="popHorario('lunes', index)">-</button>
									</li>
								</ul>


								<h6 class="card-subtitle mb-2 text-muted mt-3">Horario del martes</h6>
								<div class="d-flex align-items-center">
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora entrada</h6>
										<div class="form-group">
										<select v-model="handlers.hora_entrada_martes" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora salida</h6>
										<div class="form-group">
										<select v-model="handlers.hora_salida_martes" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-2">
										<button type="button" class="btn btn-primary btn-sm" @click="pushHorario('martes')">+</button>
									</div>
								</div>
								<ul v-if="form.hora_entrada_martes.length" class="list-group">
									<li v-for="( hora, index ) in form.hora_entrada_martes" :key="index" class="list-group-item d-flex justify-content-around align-items-center">
										<span>{{ form.hora_entrada_martes[index] }} - {{ form.hora_salida_martes[index] }}</span>
										<button type="button" class="btn btn-primary btn-sm" @click="popHorario('martes', index)">-</button>
									</li>
								</ul>

								<h6 class="card-subtitle mb-2 text-muted mt-3">Horario del miercoles</h6>
								<div class="d-flex align-items-center">
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora entrada</h6>
										<div class="form-group">
										<select v-model="handlers.hora_entrada_miercoles" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora salida</h6>
										<div class="form-group">
										<select v-model="handlers.hora_salida_miercoles" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-2">
										<button type="button" class="btn btn-primary btn-sm" @click="pushHorario('miercoles')">+</button>
									</div>
								</div>
								<ul v-if="form.hora_entrada_miercoles.length" class="list-group">
									<li v-for="( hora, index ) in form.hora_entrada_miercoles" :key="index" class="list-group-item d-flex justify-content-around align-items-center">
										<span>{{ form.hora_entrada_miercoles[index] }} - {{ form.hora_salida_miercoles[index] }}</span>
										<button type="button" class="btn btn-primary btn-sm" @click="popHorario('miercoles', index)">-</button>
									</li>
								</ul>

								<h6 class="card-subtitle mb-2 text-muted mt-3">Horario del jueves</h6>
								<div class="d-flex align-items-center">
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora entrada</h6>
										<div class="form-group">
										<select v-model="handlers.hora_entrada_jueves" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora salida</h6>
										<div class="form-group">
										<select v-model="handlers.hora_salida_jueves" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-2">
										<button type="button" class="btn btn-primary btn-sm" @click="pushHorario('jueves')">+</button>
									</div>
								</div>
								<ul v-if="form.hora_entrada_jueves.length" class="list-group">
									<li v-for="( hora, index ) in form.hora_entrada_jueves" :key="index" class="list-group-item d-flex justify-content-around align-items-center">
										<span>{{ form.hora_entrada_jueves[index] }} - {{ form.hora_salida_jueves[index] }}</span>
										<button type="button" class="btn btn-primary btn-sm" @click="popHorario('jueves', index)">-</button>
									</li>
								</ul>

								<h6 class="card-subtitle mb-2 text-muted mt-3">Horario del viernes</h6>
								<div class="d-flex align-items-center">
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora entrada</h6>
										<div class="form-group">
										<select v-model="handlers.hora_entrada_viernes" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora salida</h6>
										<div class="form-group">
										<select v-model="handlers.hora_salida_viernes" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-2">
										<button type="button" class="btn btn-primary btn-sm" @click="pushHorario('viernes')">+</button>
									</div>
								</div>
								<ul v-if="form.hora_entrada_viernes.length" class="list-group">
									<li v-for="( hora, index ) in form.hora_entrada_viernes" :key="index" class="list-group-item d-flex justify-content-around align-items-center">
										<span>{{ form.hora_entrada_viernes[index] }} - {{ form.hora_salida_viernes[index] }}</span>
										<button type="button" class="btn btn-primary btn-sm" @click="popHorario('viernes', index)">-</button>
									</li>
								</ul>

								<h6 class="card-subtitle mb-2 text-muted mt-3">Horario del sabado</h6>
								<div class="d-flex align-items-center">
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora entrada</h6>
										<div class="form-group">
										<select v-model="handlers.hora_entrada_sabado" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora salida</h6>
										<div class="form-group">
										<select v-model="handlers.hora_salida_sabado" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-2">
										<button type="button" class="btn btn-primary btn-sm" @click="pushHorario('sabado')">+</button>
									</div>
								</div>
								<ul v-if="form.hora_entrada_sabado.length" class="list-group">
									<li v-for="( hora, index ) in form.hora_entrada_sabado" :key="index" class="list-group-item d-flex justify-content-around align-items-center">
										<span>{{ form.hora_entrada_sabado[index] }} - {{ form.hora_salida_sabado[index] }}</span>
										<button type="button" class="btn btn-primary btn-sm" @click="popHorario('sabado', index)">-</button>
									</li>
								</ul>

								<h6 class="card-subtitle mb-2 text-muted mt-3">Horario del domingo</h6>
								<div class="d-flex align-items-center">
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora entrada</h6>
										<div class="form-group">
										<select v-model="handlers.hora_entrada_domingo" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-5">
										<h6 class="card-subtitle mb-2 text-muted">Hora salida</h6>
										<div class="form-group">
										<select v-model="handlers.hora_salida_domingo" class="form-control">
											<option v-for="( horario, index ) in horarios" :key="index" :value="horario.value">{{ horario.text }}</option>
										</select>
										</div>
									</div>
									<div class="col-2">
										<button type="button" class="btn btn-primary btn-sm" @click="pushHorario('domingo')">+</button>
									</div>
								</div>
								<ul v-if="form.hora_entrada_domingo.length" class="list-group">
									<li v-for="( hora, index ) in form.hora_entrada_domingo" :key="index" class="list-group-item d-flex justify-content-around align-items-center">
										<span>{{ form.hora_entrada_domingo[index] }} - {{ form.hora_salida_domingo[index] }}</span>
										<button type="button" class="btn btn-primary btn-sm" @click="popHorario('domingo', index)">-</button>
									</li>
								</ul>
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
    			hora_entrada_lunes: [],
    			hora_salida_lunes: [],
    			hora_entrada_martes: [],
    			hora_salida_martes: [],
    			hora_entrada_miercoles: [],
    			hora_salida_miercoles: [],
    			hora_entrada_jueves: [],
    			hora_salida_jueves: [],
    			hora_entrada_viernes: [],
    			hora_salida_viernes: [],
    			hora_entrada_sabado: [],
    			hora_salida_sabado: [],
				hora_entrada_domingo: [],
    			hora_salida_domingo: []
			},
			handlers: {
				hora_entrada_lunes: null,
    			hora_salida_lunes: null,
    			hora_entrada_martes: null,
    			hora_salida_martes: null,
    			hora_entrada_miercoles: null,
    			hora_salida_miercoles: null,
    			hora_entrada_jueves: null,
    			hora_salida_jueves: null,
    			hora_entrada_viernes: null,
    			hora_salida_viernes: null,
    			hora_entrada_sabado: null,
    			hora_salida_sabado: null,
				hora_entrada_domingo: null,
    			hora_salida_domingo: null
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
		pushHorario(day) {
			switch (day) {
				case 'lunes':
					if (!this.handlers.hora_entrada_lunes || !this.handlers.hora_salida_lunes) {
						this.$bvToast.toast(`Seleccione una hora de entrada y salida`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					} else {
						const entrada = this.handlers.hora_entrada_lunes.split(':')[0]
						const salida = this.handlers.hora_salida_lunes.split(':')[0]
						if (salida <= entrada) {
							this.$bvToast.toast(`Salida debe de ser posterior a entrada`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.form.hora_entrada_lunes.push(this.handlers.hora_entrada_lunes)
							this.form.hora_salida_lunes.push(this.handlers.hora_salida_lunes)
							this.handlers.hora_entrada_lunes = null
							this.handlers.hora_salida_lunes = null
						}
					}
					break;
				case 'martes':
					if (!this.handlers.hora_entrada_martes || !this.handlers.hora_salida_martes) {
						this.$bvToast.toast(`Seleccione una hora de entrada y salida`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					} else {
						const entrada = this.handlers.hora_entrada_martes.split(':')[0]
						const salida = this.handlers.hora_salida_martes.split(':')[0]
						if (salida <= entrada) {
							this.$bvToast.toast(`Salida debe de ser posterior a entrada`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.form.hora_entrada_martes.push(this.handlers.hora_entrada_martes)
							this.form.hora_salida_martes.push(this.handlers.hora_salida_martes)
							this.handlers.hora_entrada_martes = null
							this.handlers.hora_salida_martes = null
						}
					}
					break;
				case 'miercoles':
					if (!this.handlers.hora_entrada_miercoles || !this.handlers.hora_salida_miercoles) {
						this.$bvToast.toast(`Seleccione una hora de entrada y salida`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					} else {
						const entrada = this.handlers.hora_entrada_miercoles.split(':')[0]
						const salida = this.handlers.hora_salida_miercoles.split(':')[0]
						if (salida <= entrada) {
							this.$bvToast.toast(`Salida debe de ser posterior a entrada`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.form.hora_entrada_miercoles.push(this.handlers.hora_entrada_miercoles)
							this.form.hora_salida_miercoles.push(this.handlers.hora_salida_miercoles)
							this.handlers.hora_entrada_miercoles = null
							this.handlers.hora_salida_miercoles = null
						}
					}
					break;
				case 'jueves':
					if (!this.handlers.hora_entrada_jueves || !this.handlers.hora_salida_jueves) {
						this.$bvToast.toast(`Seleccione una hora de entrada y salida`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					} else {
						const entrada = this.handlers.hora_entrada_jueves.split(':')[0]
						const salida = this.handlers.hora_salida_jueves.split(':')[0]
						if (salida <= entrada) {
							this.$bvToast.toast(`Salida debe de ser posterior a entrada`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.form.hora_entrada_jueves.push(this.handlers.hora_entrada_jueves)
							this.form.hora_salida_jueves.push(this.handlers.hora_salida_jueves)
							this.handlers.hora_entrada_jueves = null
							this.handlers.hora_salida_jueves = null
						}
					}
					break;
				case 'viernes':
					if (!this.handlers.hora_entrada_viernes || !this.handlers.hora_salida_viernes) {
						this.$bvToast.toast(`Seleccione una hora de entrada y salida`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					} else {
						const entrada = this.handlers.hora_entrada_viernes.split(':')[0]
						const salida = this.handlers.hora_salida_viernes.split(':')[0]
						if (salida <= entrada) {
							this.$bvToast.toast(`Salida debe de ser posterior a entrada`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.form.hora_entrada_viernes.push(this.handlers.hora_entrada_viernes)
							this.form.hora_salida_viernes.push(this.handlers.hora_salida_viernes)
							this.handlers.hora_entrada_viernes = null
							this.handlers.hora_salida_viernes = null
						}
					}
					break;
				case 'sabado':
					if (!this.handlers.hora_entrada_sabado || !this.handlers.hora_salida_sabado) {
						this.$bvToast.toast(`Seleccione una hora de entrada y salida`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					} else {
						const entrada = this.handlers.hora_entrada_sabado.split(':')[0]
						const salida = this.handlers.hora_salida_sabado.split(':')[0]
						if (salida <= entrada) {
							this.$bvToast.toast(`Salida debe de ser posterior a entrada`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.form.hora_entrada_sabado.push(this.handlers.hora_entrada_sabado)
							this.form.hora_salida_sabado.push(this.handlers.hora_salida_sabado)
							this.handlers.hora_entrada_sabado = null
							this.handlers.hora_salida_sabado = null
						}
					}
					break;
				case 'domingo':
					if (!this.handlers.hora_entrada_domingo || !this.handlers.hora_salida_domingo) {
						this.$bvToast.toast(`Seleccione una hora de entrada y salida`, {
							title: `ERROR`,
							toaster: 'b-toaster-top-center',
							variant: 'danger',
							solid: true
						})
					} else {
						const entrada = this.handlers.hora_entrada_domingo.split(':')[0]
						const salida = this.handlers.hora_salida_domingo.split(':')[0]
						if (salida <= entrada) {
							this.$bvToast.toast(`Salida debe de ser posterior a entrada`, {
								title: `ERROR`,
								toaster: 'b-toaster-top-center',
								variant: 'danger',
								solid: true
							})
						} else {
							this.form.hora_entrada_domingo.push(this.handlers.hora_entrada_domingo)
							this.form.hora_salida_domingo.push(this.handlers.hora_salida_domingo)
							this.handlers.hora_entrada_domingo = null
							this.handlers.hora_salida_domingo = null
						}
					}
					break;
				default:
					this.$bvToast.toast(`Intente otra vez`, {
						title: `ERROR`,
						toaster: 'b-toaster-top-center',
						variant: 'danger',
						solid: true
					})
					break;
			}
		},
		popHorario(day, index) {
			switch (day) {
				case 'lunes':
					this.form.hora_entrada_lunes.splice(index, 1)
					this.form.hora_salida_lunes.splice(index, 1)
					break;
				case 'martes':
					this.form.hora_entrada_martes.splice(index, 1)
					this.form.hora_salida_martes.splice(index, 1)
					break;
				case 'miercoles':
					this.form.hora_entrada_miercoles.splice(index, 1)
					this.form.hora_salida_miercoles.splice(index, 1)
					break;
				case 'jueves':
					this.form.hora_entrada_jueves.splice(index, 1)
					this.form.hora_salida_jueves.splice(index, 1)
					break;
				case 'viernes':
					this.form.hora_entrada_viernes.splice(index, 1)
					this.form.hora_salida_viernes.splice(index, 1)
					break;
				case 'sabado':
					this.form.hora_entrada_sabado.splice(index, 1)
					this.form.hora_salida_sabado.splice(index, 1)
					break;
				case 'domingo':
					this.form.hora_entrada_domingo.splice(index, 1)
					this.form.hora_salida_domingo.splice(index, 1)
					break;
				default:
					this.$bvToast.toast(`Intente otra vez`, {
						title: `ERROR`,
						toaster: 'b-toaster-top-center',
						variant: 'danger',
						solid: true
					})
					break;
			}
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
			} else if (
				!this.form.hora_entrada_lunes.length &&
				!this.form.hora_entrada_martes.length &&
				!this.form.hora_entrada_miercoles.length &&
				!this.form.hora_entrada_jueves.length &&
				!this.form.hora_entrada_viernes.length &&
				!this.form.hora_entrada_sabado.length &&
				!this.form.hora_entrada_domingo.length
			) {
				this.$bvToast.toast(`Debe de asignar por lo menos un horario de un día`, {
					title: `ERROR`,
					toaster: 'b-toaster-top-center',
					variant: 'danger',
					solid: true
				})
			} else {
				this.form.user_id = this.selectedUser.id
				this.form.edificio_id = this.selectedBuilding.id
				this.$axios.post('asignar-parqueo', this.form)
					.then((r) => {
						if (r.status === 200) {
							this.$bvToast.toast(`Parqueo asignado exitosamente`, {
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