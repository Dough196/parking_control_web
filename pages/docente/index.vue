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
								<div class="card-header color-utec text-white">Credenciales</div>
								<div class="card-body">
									<h6 class="card-subtitle mb-2 text-muted">Nombres</h6>
									<p class="card-text">Ing. Jorge Aparicio de Tal</p>
									<h6 class="card-subtitle mb-2 text-muted">Correo</h6>
									<p class="card-text">jorge.aparicio@mail.utec.sv</p>
								</div>
								<div class="card-header color-utec text-white">Estacionamiento</div>
								<div class="card-body">
									<h6 class="card-subtitle mb-2 text-muted">Estacionamiento Asignado</h6>
									<p class="card-text">Benito Juarez — Sótano</p>
									<h6 class="card-subtitle mb-2 text-muted">Disponibilidad de Estacionamiento</h6>
									<p class="card-text text-success">Disponible</p>
								</div>
							</div>
                            <!-- Boton para ver lista de estacionamiento -->
							<div class="d-flex justify-content-center">
								<a href="/docente/ver-parqueo" class="btn color-utec text-white">Ver estacionamientos</a>
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