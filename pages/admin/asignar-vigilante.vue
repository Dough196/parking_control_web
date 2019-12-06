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
							
                            <!-- Seleccionador de vigilante -->
                            <h6 class="card-subtitle mb-2 text-muted">Nombre del vigilante</h6>
							<div style = 'width: 250px;' class="form-group seleccionador">
					        <select class="form-control">
					            <option>--seleccione una opción--</option>
					    	    <option>2</option>
						        <option>3</option>
						        <option>4</option>
					        </select>
					        </div>

                            <!-- Seleccionador de edificio -->
							<h6 class="card-subtitle mb-2 text-muted mt-3">Edificio</h6>
							<div style = 'width: 250px;' class="form-group">
					        <select class="form-control">
					            <option>--seleccione una opción--</option>
					    	    <option>2</option>
						        <option>3</option>
						        <option>4</option>
					        </select>
					        </div>
                        
							<!-- Boton para aceptar los cambios -->
							<div class="d-flex mt-3">
								<button type="button" class="btn color-utec text-white">Aceptar</button>
							</div>
                        
                        
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