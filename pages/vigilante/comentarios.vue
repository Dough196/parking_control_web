<template>
<div>
    <div class="container d-flex justify-content-center">
        <div class="card mt-5">
            <h5 class="card-header bg-colorheader text-light">Comentarios</h5>
        <div class="card-body">
        
        <div class="form-group">
					<input v-model="Placa" type="text" class="form-control" placeholder="Numero de placa" required>
		</div>
        <button type="submit" class="btn btn-primary m-md-2 color-button" id="boton2">Buscar Usuario</button>
        <div v-if="user.reservas">
            <b>Datos de usuario</b>
        <div class="card d-flex">
            <form class="mt-3 ml-4 mr-3">
			     <div v-if="user.nombre || user.apellidos">
                   <b>Nombres</b>
                    <p>{{ user.nombres + ' ' + user.apellidos }}</p>
                  </div>
                 
                <div v-if="user.num_placa">
                        <b>Placa</b>
                      <p>{{ user.num_placa }}</p>
                </div>
                <div v-if="">
                   <b>Edificio asignado</b>
                      <p>{{  }}</p>
                 </div>
                 <div v-if="">
                   <b>hora de entrada</b>
                      <p></p>
                 </div>
                 <div v-if="">
                   <b>hora de salida</b>
                      <p></p>
                 </div>
					<button type="submit" class="btn btn-primary m-md-2 color-button">Regresar</button>
                    <button type="submit" class="btn btn-primary ml-4 color-button" >Comentar</button>
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



#boton2
{
	width: 350px; 
	color: white;
	background-color: #98094D;
}

</style>

