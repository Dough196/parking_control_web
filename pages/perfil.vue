<template>
<div class="bg">
		<b-container fluid class="d-flex justify-content-center h-100 w-100">
			<b-row align-v="center">
				<!-- Tarjeta de informacion -->
				<div class="card">
					<div class="card-header text-center">UNIVERSIDAD TECNOLOGICA DE EL SALVADOR</div>
					<div class="card-body p-lg-5">
						<div>
							<div class="card border-utec mb-3" style="width: 28rem;">
								<div class="card-header color-utec text-white">Header</div>
								<div class="card-body">
									<h6 class="card-subtitle mb-2 text-muted">Nombre</h6>
									<p class="card-text">{{ user.nombres + ' ' + user.apellidos }}</p>
									<div v-if="user.carnet">
										<h6 class="card-subtitle mb-2 text-muted">Carnet</h6>
										<p>{{ user.carnet }}</p>
									</div>
									<div v-if="user.email">
										<h6 class="card-subtitle mb-2 text-muted">E-mail</h6>
										<p>{{ user.email }}</p>
									</div>
									<div v-if="user.num_placa">
										<h6 class="card-subtitle mb-2 text-muted">Placa</h6>
										<p>{{ user.num_placa }}</p>
									</div>
								</div>

								<!-- Seccion de contraseñas -->
								<div class="card-header color-utec text-white">Cambio de contraseña</div>
								<div class="card-body">
									<form @submit.prevent="onSubmit">
										<!-- Input contraseña actual -->
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text" id="basic-addon1">
													<font-awesome-icon :icon="['fas', 'key']" class="color-icon" />
												</span>
											</div>
											<input
												v-model="form.password"
												type="password"
												class="form-control"
												placeholder="Ingresa tu contraseña actual"
												aria-label="password"
												aria-describedby="basic-addon1"
												required
											/>
										</div>

										<!-- Input contraseña nueva -->
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text" id="basic-addon1">
													<font-awesome-icon :icon="['fas', 'key']" class="color-icon" />
												</span>
											</div>
											<input
												v-model="form.new_password"
												type="password"
												class="form-control"
												placeholder="Contraseña nueva"
												aria-label="Username"
												aria-describedby="basic-addon1"
												required
											/>
										</div>

										<!-- Input confirmacion de contraseña -->
										<div class="input-group mb-3">
											<div class="input-group-prepend">
												<span class="input-group-text" id="basic-addon1">
													<font-awesome-icon :icon="['fas', 'key']" class="color-icon" />
												</span>
											</div>
											<input
												v-model="form.new_password_confirmation"
												type="password"
												class="form-control"
												placeholder="Confirmar contraseña nueva"
												aria-label="Username"
												aria-describedby="basic-addon1"
												required
											/>
										</div>

										<!-- Boton para aceptar los cambios -->
										<div class="d-flex justify-content-center">
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

export default {
	components: {},
	data() {
		return {
			form: {
				password: '',
				new_password: '',
				new_password_confirmation: ''
			}
		}
	},
    mounted() {},
    methods: {
        onSubmit() {
			this.$axios.post('perfil/actualizar-contrasena', this.form)
				.then((r) => {
					if (r.status === 200) {
						this.$bvToast.toast(`${r.data.success}`, {
							title: `EXITO`,
							toaster: 'b-toaster-top-center',
							variant: 'success',
							solid: true
						})
						this.form.password = '',
						this.form.new_password = '',
						this.form.new_password_confirmation = ''
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

.color-icon {
	color: #98094d;
}
</style>