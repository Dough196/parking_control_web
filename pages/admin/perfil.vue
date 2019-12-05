<template>
<div>
    <div class="container d-flex justify-content-center">
        <div class="card mt-5">
            <h5 class="card-header bg-colorheader text-light">Featured</h5>
        <div class="card-body">
        <div v-if="user.nombre || user.apellidos">
            <b>Nombres</b>
            <p>{{ user.nombres + ' ' + user.apellidos }}</p>
        </div>
        <div v-if="user.email">
            <b>E-mail</b>
            <p>{{ user.email }}</p>
        </div>
        <div v-if="user.num_placa">
            <b>Placa</b>
            <p>{{ user.num_placa }}</p>
        </div>
        <div v-if="user.reservas">
            <b>Cambiar clave de acceso</b>
        <div class="card d-flex">
            <form class="mt-3 ml-4 mr-3">
				<div class="form-group">
					<input v-model="contraseA" type="text" class="form-control" placeholder="Contraseña actual" required>
			    </div>
				<div class="form-group">
				    <input v-model="nuevaContraseA" type="text" class="form-control" placeholder="Nueva contraseña" required>
				</div>
				<div class="form-group">
					<input v-model="confContraseA" type="text" class="form-control" placeholder="Confirmar contraseña" required>
				</div>
					<button type="submit" class="btn btn-primary m-md-2">Confirmar</button>
                    <button type="submit" class="btn btn-primary ml-4 color-button">Cancelar</button>
			</form>
        </div>
        </div>
        </div>
        </div>
        </div>
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
    .bg-colorheader {
        background: #98094D;

    }

    .color-button {
        background: #98094D;
    }

</style>