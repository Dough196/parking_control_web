<template>
  <div class="bg">
        <b-modal v-model="saveUsersWithFile" class="custom-modal" title="Ready for vetting" hide-footer hide-header no-close-on-esc no-close-on-backdrop>
            <div class="row p-5">
                <div class="col-12 modal-title my-2">
                    <b-alert variant="success" show>{{ result.uploaded }} de {{ result.processed }}  {{ (result.uploaded > 1 || result.uploaded == 0) ? 'usuarios fueron registrados' : 'ha sido registrado'}}</b-alert>
                </div>
                <div v-if="result.failed > 0" class="col-12 modal-title my-2">
                    Por favor solucione los <strong>errores</strong> en las siguientes líneas antes de volver a subir el archivo.
                    Asegúrese de borrar las líneas de los usuarios que ya fueron registrados.
                    <div class="mt-5">
                        <b-alert v-for="(messages, index) in result.errors" v-bind:key="index" show variant="danger"><b>ERROR EN LA LÍNEA {{index}}:</b> {{ messages[Object.keys(messages)[0]][0] }}</b-alert>
                    </div>
                </div>
            </div>
            <b-btn block variant="danger" @click="reload">Cerrar</b-btn>
        </b-modal>
		<b-container fluid class="d-flex justify-content-center h-100 w-100">
			<b-row align-v="center">
				<!-- Tarjeta de informacion -->
				<div class="card">
					<div class="card-header text-center">UNIVERSIDAD TECNOLOGICA DE EL SALVADOR</div>
					<div class="card-body  p-lg-5">
						<div>
					<div class="card border-utec mb-3 " style="width: 28rem;">
						<div class="card-header color-utec text-white">Nuevo Usuario</div>
						<div class="card-body">
							<form @submit.prevent="onSubmit">
								<!-- Seleccionador de vigilante -->
								<h6 class="card-subtitle mb-2 text-muted">Tipo de usuario</h6>
								<div class="form-group seleccionador">
								<Multiselect v-model="selectedRole" :options="roles" placeholder="Seleccionar..." label="nombre" track-by="nombre" :show-labels="false"></Multiselect>
								</div>

								<!-- Seleccionador de edificio -->
								<!-- <h6 class="card-subtitle mb-2 text-muted mt-3">Edificio</h6>
								<div class="form-group">
								<Multiselect v-model="selectedBuilding" :options="buildings" placeholder="Seleccionar..." label="nombre" track-by="nombre" :show-labels="false" :allow-empty="false"></Multiselect>
								</div> -->
                                <template v-if="selectedRole">
                                    <h6 class="card-subtitle mb-2 text-muted mt-3">Nombres</h6>
                                    <div class="form-group">
                                        <input
                                            v-model="form.nombres"
                                            type="text"
                                            class="form-control"
                                            placeholder="Nombres"
                                            aria-label="Nombres"
                                            required
                                        />
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-muted mt-3">Apellidos</h6>
                                    <div class="form-group">
                                        <input
                                            v-model="form.apellidos"
                                            type="text"
                                            class="form-control"
                                            placeholder="Apellidos"
                                            aria-label="Apellidos"
                                            required
                                        />
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-muted mt-3">Correo Electrónico</h6>
                                    <div class="form-group">
                                        <input
                                            v-model="form.email"
                                            type="email"
                                            class="form-control"
                                            placeholder="Correo Electrónico"
                                            aria-label="Correo Electrónico"
                                            required
                                        />
                                    </div>
                                    <template v-if="selectedRole.id === 4">
                                        <h6 class="card-subtitle mb-2 text-muted mt-3">Carnet</h6>
                                        <div class="form-group">
                                            <input
                                                v-model="form.carnet"
                                                type="text"
                                                class="form-control"
                                                placeholder="Carnet"
                                                aria-label="Carnet"
                                                required
                                            />
                                        </div>
                                    </template>
                                    <template v-if="selectedRole.id !== 5">
                                        <h6 class="card-subtitle mb-2 text-muted mt-3">Número de placa</h6>
                                        <div class="form-group">
                                            <input
                                                v-model="form.num_placa"
                                                type="text"
                                                class="form-control"
                                                placeholder="Número de placa"
                                                aria-label="Número de placa"
                                                required
                                            />
                                        </div>
                                    </template>
                                    <h6 class="card-subtitle mb-2 text-muted mt-3">Contraseña</h6>
                                    <div class="form-group">
                                        <input
                                            v-model="form.password"
                                            type="password"
                                            class="form-control"
                                            placeholder="Contraseña"
                                            aria-label="Contraseña"
                                            required
                                        />
                                    </div>
                                    <h6 class="card-subtitle mb-2 text-muted mt-3">Confirmar contraseña</h6>
                                    <div class="form-group">
                                        <input
                                            v-model="form.password_confirmation"
                                            type="password"
                                            class="form-control"
                                            placeholder="Confirmar Contraseña"
                                            aria-label="Confirmar Contraseña"
                                            required
                                        />
                                    </div>
                                    <div class="d-flex mt-3">
                                        <button type="submit" class="btn color-utec text-white">Aceptar</button>
                                    </div>
                                </template>
								<!-- Boton para aceptar los cambios -->
                        	</form>
                        
						</div>

                        <!-- Seccion de descarga de excel -->
						<div class="card-header color-utec text-white">
                            Crear varios usuarios mediante archivo CSV
                            <div class="d-flex justify-content-center mt-3">
                                <button type="button" class="btn boton-color text-black">Descargar plantilla</button>
                            </div>
                        </div>
						<div class="card-body">

                            <!-- <div class="d-flex justify-content-center mt-3">
                                <button type="button" class="btn boton-color text-black">Descargar plantilla</button>
                            </div> -->
							<!-- Boton para aceptar los cambios -->
                            <form @submit.prevent="uploadFile">
                                <div class="d-flex justify-content-center mt-3">
                                    <b-form-file
                                        v-model="file"
                                        :state="Boolean(file)"
                                        placeholder="Selecciona un archivo o arrastra..."
                                        drop-placeholder="Suelta aquí..."
                                        accept=".csv"
                                        browse-text="Buscar"
                                    ></b-form-file>
                                </div>
                                <div class="d-flex justify-content-center mt-3">
                                    <button type="submit" class="btn color-utec text-white">Aceptar</button>
                                </div>
                            </form>
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
import Multiselect from 'vue-multiselect'
export default {
    components: {Multiselect},
    data() {
        return {
            roles: [],
            selectedRole: null,
            form: {
                nombres: null,
                apellidos: null,
                email: null,
                carnet: null,
                num_placa: null,
                password: null,
                password_confirmation: null,
                rol_id: null
            },
            saveUsersWithFile: false,
            file: null,
            result: {
                uploaded: 0,
                processed: 0,
                failed: 0,
                errors: []
            }

        }
    },
    mounted() {
        this.fetchRoles()
    },
    methods: {
        async fetchRoles() {
            let { data } = await this.$axios.get('/roles')
			this.roles = data.roles
		},
        onSubmit() {
            this.form.rol_id = this.selectedRole.id
            this.$axios.post('register', this.form)
                .then((r) => {
                    if (r.status === 200 || r.status === 201) {
                        this.$bvToast.toast(`Usuario creado exitosamente`, {
                            title: `EXITO`,
                            toaster: 'b-toaster-top-center',
                            variant: 'success',
                            solid: true
                        })
                        this.selectedRole = null
                        this.form.nombres = null
                        this.form.apellidos = null
                        this.form.email = null
                        this.form.carnet = null
                        this.form.num_placa = null
                        this.form.password = null
                        this.form.password_confirmation = null
                        this.form.rol_id = null
                    }
                })
                .catch((e) => {
                    let text = 'Hubo un error, intente mas tarde'
                    if (e.response.status === 422) {
                        text = e.response.data.data[Object.keys(e.response.data.data)[0]][0]
                    } else {
                        text = e.response.data.error
                    }
                    this.$bvToast.toast(`${text}`, {
                        title: `ERROR`,
                        toaster: 'b-toaster-top-center',
                        variant: 'danger',
                        solid: true
                    })
                })
        },
        uploadFile() {
            let formData = new FormData()
            formData.append('file', this.file)
            this.$axios.post('register-users', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((r) => {
                    if (r.status === 200 || r.status === 201) {
                        this.result = r.data;
                        // this.$bvToast.toast(`Usuario creado exitosamente`, {
                        //     title: `EXITO`,
                        //     toaster: 'b-toaster-top-center',
                        //     variant: 'success',
                        //     solid: true
                        // })
                        // this.selectedRole = null
                        // this.form.nombres = null
                        // this.form.apellidos = null
                        // this.form.email = null
                        // this.form.carnet = null
                        // this.form.num_placa = null
                        // this.form.password = null
                        // this.form.password_confirmation = null
                        // this.form.rol_id = null
                        this.saveUsersWithFile = true
                    }
                })
                .catch((e) => {
                    console.log(e)
                    let text = 'Hubo un error, intente mas tarde'
                    if (e.response.status === 422) {
                        text = e.response.data.data[Object.keys(e.response.data.data)[0]][0]
                    } else {
                        text = e.response.data.error
                    }
                    this.$bvToast.toast(`${text}`, {
                        title: `ERROR`,
                        toaster: 'b-toaster-top-center',
                        variant: 'danger',
                        solid: true
                    })
                })
        },
        reload() {
            location.reload()
        }
    }
}
</script>

<style>

</style>