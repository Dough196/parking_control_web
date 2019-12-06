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
						<div class="card-header color-utec text-white">Consultar parqueo</div>
						<div class="card-body">
                            <div v-for="(edificio, index ) in edificios" class="d-flex align-items-center edificio" :key="index">
							    <font-awesome-icon :icon="['fas', 'building']" :class="[edificio.num_disponible === 0 ? 'not-available' : 'is-available', 'big']" />
                                <div class="info">
                                    <h6 class="card-subtitle mb-2 text-muted">Nombre</h6>
									<p class="card-text">{{ edificio.nombre }}</p>
                                    <h6 class="card-subtitle mb-2 text-muted">Disponible</h6>
									<p class="card-text">{{ edificio.num_disponible }}</p>
                                </div>
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
    name: 'consultarParqueo',
    data() {
        return {
            isFull: false,
            edificios: [],
            edificiosConsultados: []
        }
    },
    mounted() {
        console.log(this.user.reservas)
        this.getBuildingStatus()
    },
    methods: {
        getBuildingStatus() {
            if (this.user.reservas) {
                this.user.reservas.forEach((e) => {
                    if (!this.edificiosConsultados.includes(e.edificios[0].id)) {
                        this.$axios.get(`/edificios/${e.edificios[0].id}`)
                            .then((r) => {
                                if (r.status === 200) {
                                    this.edificios.push(r.data.edificio)
                                }
                            })
                        this.edificiosConsultados.push(e.edificios[0].id)
                    }
                });
            }
        }
    }
}
</script>

<style>
.not-available {
    color: red;
}

.is-available {
    color: green;
}

.big {
    font-size: 100px;
}

.edificio {
    margin: 20px auto;
}

.info {
    padding-left: 10px;
}
</style>
