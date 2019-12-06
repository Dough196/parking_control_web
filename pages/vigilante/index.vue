<template>
	<div class="bg">
		<b-container fluid class="d-flex justify-content-center h-100 w-100">
			<b-row align-v="center">
				<!-- Tarjeta de informacion -->
				<div class="card">
					<div class="card-header text-center">UNIVERSIDAD TECNOLÓGICA DE EL SALVADOR</div>
					<div class="card-body p-lg-5">
						<div>
							<div class="card border-utec mb-3" style="width: 28rem;">
								<div class="card-body">
									<!-- Input para buscar usuario -->
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text" id="basic-addon1">
												<font-awesome-icon :icon="['fas', 'user']" class="color-icon" />
											</span>
										</div>
										<input
											type="text"
											class="form-control"
											placeholder="Numero de placa"
											aria-label="Username"
											aria-describedby="basic-addon1"
										/>
									</div>
									<!-- Boton para aceptar los cambios -->
									<div class="d-flex justify-content-center">
										<button type="button" class="btn color-utec text-white">Buscar Usuario</button>
									</div>
								</div>
							</div>

							<div class="card border-utec mb-3" style="width: 28rem;">
								<div class="card-header color-utec text-white">Datos de usuario</div>
								<div class="card-body">
									<h6 class="card-subtitle text-info mb-u">Nombres</h6>
									<p class="card-text">Ruth Marina Flores Figueroa</p>
									<h6 class="card-subtitle text-info">Numero de placa</h6>
									<p class="card-text">342-567</p>
                                    <h6 class="card-subtitle text-info">Edificio asignado</h6>
									<p class="card-text">Simon Bolivar</p>
                                    <h6 class="card-subtitle text-info">Hora de entrada</h6>
									<p class="card-text">06:30:00</p>
                                    <h6 class="card-subtitle text-info">Hora de salida</h6>
									<p class="card-text">17:30:00</p>
								</div>
							</div>

							<div class="d-flex justify-content-center">
								<button type="button" class="btn btn-info">Validar Entrada</button>
							</div>

							<div class="d-flex justify-content-center mt-2">
								<button type="button" class="btn btn-warning">Validar Salida</button>
							</div>
						</div>
					</div>
					<div class="card-footer text-muted text-center">ATREVÁMONOS A SER MEJORES</div>
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