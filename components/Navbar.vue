<template>
<div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
    <!-- <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-align-left"></i> Toggle Sidebar
                </button>
            </div>
        </nav> -->
    <div class="container mt-4">
        <div class="sidebar-header text-white">
            <h3>Administrador</h3>
        </div>

        <ul class="list-unstyled components mt-3">
            <li>
                <font-awesome-icon :icon="['fas', 'home']" class="color-icon-sb" /><a href="#" class="text-white"> Inicio</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'user']" class="color-icon-sb" /><a href="#" class="text-white"> Ver Perfil</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'edit']" class="color-icon-sb" /><a href="#" class="text-white"> Asignar estacionamiento</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'address-book']" class="color-icon-sb"/><a href="#" class="text-white"> Asignar vigilante</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'calendar-check']" class="color-icon-sb" /><a href="#" class="text-white"> Crear eventos</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'check']" class="color-icon-sb" /><a href="#" class="text-white"> Reservar estacionamiento</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'building']" class="color-icon-sb" /><a href="#" class="text-white"> Nuevo edificio</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'address-book']" class="color-icon-sb" /><a href="#" class="text-white"> Asignar Administradores</a>
            </li>
            <br>
            <li>
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="color-icon-sb" /><a href="#" class="text-white" @click="logout"> Cerrar Sesion</a>
            </li>
        </ul>
    </div>
    </nav>
</div>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout();
            this.$router.push({
                path: "/login"
            });
        }
    }
};
</script>

<style>
.wrapper {
    display: block;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* top layer */
    z-index: 9999;
    background: rgba(152, 9, 78, 0.774);
}

.color-icon-sb {
    color: #ffff;
}

</style>
