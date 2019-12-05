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
            <h3>Bootstrap</h3>
        </div>

        <ul class="list-unstyled components mt-3">
            <li>
                <a href="#" class="text-white">Active</a>
            </li>
            <li>
                <a href="#" class="text-white">Link</a>
            </li>
            <li>
                <a href="#" class="text-white">Link</a>
            </li>
            <li>
                <!--
                    href esta vacio porque se le agrega a la ruta
                    todo lo que contenga este atributo, pero provoca
                    un problema, que al cerrar sesion dirige a pagina
                    no encontrada y despues redirige al login
                -->
                <a href="" class="text-white" @click="logout">Cerrar Sesion</a>
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

</style>
