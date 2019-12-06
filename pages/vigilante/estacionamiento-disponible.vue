<template>
	<div>
		<div class="container d-flex justify-content-center">
			<div class="card mt-5">
				<h5 class="card-header bg-colorheader text-light">Estacionamientos disponibles</h5>
				<div class="card-body">
					<div class="card d-flex">
						<div id="divParqueo1">
							<font-awesome-icon :icon="['fas', 'building']" id="parqueo" />
						</div>
						<div id="divParqueo">
							<div v-if>
								<b>Edificio</b>
								<p>{{ }}</p>
							</div>

							<div v-if>
								<b>Espacios disponibles</b>
								<p>{{ }}</p>
							</div>
						</div>
					</div>
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

#parqueo {
	color: green;
	font-size: 100px;
}

#divParqueo {
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;

	width: 100%;
	height: 100%;
	float: left;
}

#divParqueo1 {
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	height: 100%;
	width: 20%;
	float: left;
}
</style>