<template>
	<div class="bg">
		<b-container fluid class="d-flex justify-content-center h-100 w-100">
			<b-row align-v="center">
				<!-- Tarjeta de informacion -->
				<div class="card">
					<div class="card-header text-center">UNIVERSIDAD TECNOLOGICA DE EL SALVADOR</div>
					<div class="card-body  p-lg-5">
						<div>
					<div class="card border-utec mb-3" style="width: 28rem;">
						<div class="card-header color-utec text-white">Header</div>
						<div class="card-body">
							<h6 class="card-subtitle mb-2 text-muted">Nombres</h6>
							<p class="card-text">Ing. Jorge Aparicio de Tal</p>
							<h6 class="card-subtitle mb-2 text-muted">Correo</h6>
							<p class="card-text">jorge.aparicio@mail.utec.sv</p>
						</div>

                        <!-- Seccion de contraseñas -->
						<div class="card-header color-utec text-white">Cambio de contraseña</div>
						<div class="card-body">

                            <!-- Input contraseña actual -->
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1">
										<font-awesome-icon :icon="['fas', 'key']" class="color-icon" />
									</span>
								</div>
								<input
									type="text"
									class="form-control"
									placeholder="Ingresa tu contraseña actual"
									aria-label="password"
									aria-describedby="basic-addon1"
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
									type="Ingresa tu nueva contraseña"
									class="form-control"
									placeholder="Password"
									aria-label="Username"
									aria-describedby="basic-addon1"
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
									type="Confirma tu nueva contraseña"
									class="form-control"
									placeholder="Password"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
							</div>

                            <!-- Boton para aceptar los cambios -->
							<div class="d-flex justify-content-center">
								<button type="button" class="btn color-utec text-white">Aceptar</button>
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
