<template>
	<div>
		<div class="container d-flex justify-content-center">
			<div class="card mt-5">
				<h5 class="card-header bg-colorheader text-light">Estacionamientos disponibles</h5>
				<div class="card-body">
					<div class="card d-flex">
						<ul class="list-group">
							<li class="list-group-item">

								<div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <font-awesome-icon :icon="['fas', 'building']" id="parqueo" class="float-left" />
                                    </div>
                                    <div class="col-9">
                                        <div>Edificio</div>
                                        <div class="text-text">Benito Juarez</div>
                                        <div>Espacios disponibles</div>
                                        <div class="text-text">0 de 50</div>
                                    </div>
								</div>

							</li>
							<li class="list-group-item">

                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <font-awesome-icon :icon="['fas', 'building']" id="parqueo" class="float-left" />
                                    </div>
                                    <div class="col-9">
                                        <div>Edificio</div>
                                        <div class="text-text">Benito Juarez</div>
                                        <div>Espacios disponibles</div>
                                        <div class="text-text">0 de 50</div>
                                    </div>
								</div>

                            </li>
							<li class="list-group-item">

                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <font-awesome-icon :icon="['fas', 'building']" id="parqueo" class="float-left" />
                                    </div>
                                    <div class="col-9">
                                        <div>Edificio</div>
                                        <div class="text-text">Benito Juarez</div>
                                        <div>Espacios disponibles</div>
                                        <div class="text-text">0 de 50</div>
                                    </div>
								</div>

                            </li>
							<li class="list-group-item">

                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <font-awesome-icon :icon="['fas', 'building']" id="parqueo" class="float-left" />
                                    </div>
                                    <div class="col-9">
                                        <div>Edificio</div>
                                        <div class="text-text">Benito Juarez</div>
                                        <div>Espacios disponibles</div>
                                        <div class="text-text">0 de 50</div>
                                    </div>
								</div>

                            </li>
						</ul>
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
	color: #98094d;
	font-size: 50px;
    margin-right: 10px;
}

.text-text {
	margin: 0;
    padding: 0;
    font-size: 12px;
}
</style>