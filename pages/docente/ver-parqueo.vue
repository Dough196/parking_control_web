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
								<div class="card-header color-utec text-white text-center">Lista de Estacionamientos</div>
								<div class="card-body">
									<!-- Lista de estacionamientos -->
									<ul class="list-group">
										<!-- Encabezado -->
										<li class="list-group-item d-flex justify-content-between align-items-center">
											<span class="text-info badge-pill">Nombre de edificio</span>
											<span class="text-info badge-pill">Disponibles</span>
										</li>
										<!-- Lista -->
										<li class="list-group-item d-flex justify-content-between align-items-center">
											Benito Juarez — Sotano
											<span class="badge badge-primary badge-pill">14</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center">
											Simon Bolivar
											<span class="badge badge-primary badge-pill">12</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center">
											Villa Fermina
											<span class="badge badge-primary badge-pill">23</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center">
											Garcia Lorca
											<span class="badge badge-primary badge-pill">21</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center">
											Jorge Luis Borges
											<span class="badge badge-primary badge-pill">14</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div class="d-flex justify-content-center">
							<a href="/docente" class="btn color-utec text-white">Regresar</a>
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