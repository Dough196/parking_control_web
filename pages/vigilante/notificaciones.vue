<template>
	<div>
		<div class="container d-flex justify-content-center">
			<div class="card mt-5">
				<h5 class="card-header bg-colorheader text-light">Notificaciones</h5>
				<div class="card-body">
					<div v-if="user.nombre || user.apellidos">
						<b>Nombres</b>
						<p>{{ user.nombres + ' ' + user.apellidos }}</p>
					</div>

					<div v-if="user.num_placa">
						<b>Placa</b>
						<p>{{ user.num_placa }}</p>
					</div>
					<button type="button" class="btn btn-primary m-md-2 color-button" id="boton2">Ir a inicio</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	mounted() {},
	methods: {
		consultar() {
			console.log("f");
		}
	}
};
</script>

<style>
.bg-colorheader {
	background: #98094d;
}

#boton2 {
	width: 350px;
	color: white;
	background-color: #98094d;
}
</style>