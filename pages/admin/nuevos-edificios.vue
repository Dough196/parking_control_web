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
						<div class="card-header color-utec text-white">Nuevo Edificio</div>
						<div class="card-body">
							<!-- Input para nombre del edificio -->
							<h6 class="card-subtitle mb-2 text-muted">Nombre del edificio</h6>
							<input
									type="Ingresa edificio"
									class="form-control"
									placeholder="Ingrese el nombre del edificio"
									aria-label="Username"
									aria-describedby="basic-addon1"
							/>
							<!-- Input para cantidad de estacionamientos -->
							<h6 class="card-subtitle mb-2 text-muted mt-3">Cantidad de estacionamientos</h6>
							<input
									type="Ingresa cantidad estacionamientos"
									class="form-control"
									placeholder="Cantidad de estacionamientos"
									aria-label="Username"
									aria-describedby="basic-addon1"
							/>
							<!-- Input para estacionamientos reservados -->
                            <div>
                            <h6 class="card-subtitle mb-2 text-muted mt-3">Estacionamientos reservados</h6>
                            <input
									type="Ingresa cantidad reservas"
									class="form-control"
									placeholder="Cantidad de reservas"
									aria-label="Username"
									aria-describedby="basic-addon1"
							/>
                            </div>

							<!-- Boton para aceptar los cambios -->
							<div class="d-flex justify-content-center mt-3">
								<button type="button" class="btn color-utec text-white">Aceptar</button>
							</div>

						</div>

                        <!-- Seccion de descarga de excel -->
						<div class="card-header color-utec text-white">Descargar plantilla Excel</div>
						<div class="card-body">

							<!-- Boton para seleccionar archivo y para subir archivo -->
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

export default {
    components: {
    },
    mounted() {},
    methods: {
        consultar() {
            console.log('f')
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