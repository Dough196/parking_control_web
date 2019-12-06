<template>
<div class="col-2 p-0">
    <!-- Sidebar -->
    <nav id="sidebar">
    <!-- <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-align-left"></i> Toggle Sidebar
                </button>
            </div>
        </nav> -->
    <div class="container">
        <div class="sidebar-header text-white">
            <h3>{{ user.rol.nombre }}</h3>
        </div>

        <ul class="list-unstyled components mt-3">
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'home']" class="color-icon-sb" /><a href="#" class="text-white"> Inicio</a>
            </li>
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'user']" class="color-icon-sb" /><a href="#" class="text-white"> Ver Perfil</a>
            </li>
            <template v-if="isAdmin">
                <br>
                <li>
                    <font-awesome-icon :icon="['fas', 'edit']" class="color-icon-sb" /><nuxt-link to="/admin/asignar-estacionamiento" class="text-white"> Asignar estacionamiento</nuxt-link>
                </li>
            </template>
            <template v-if="isAdmin">
                <br>
                <li>
                    <font-awesome-icon :icon="['fas', 'address-book']" class="color-icon-sb"/><nuxt-link to="/admin/asignar-vigilante" class="text-white"> Asignar vigilante</nuxt-link>
                </li>
            </template>
            <template v-if="isAdmin">
                <br>
                <li>
                    <font-awesome-icon :icon="['fas', 'calendar-check']" class="color-icon-sb" /><nuxt-link to="#" class="text-white"> Crear eventos</nuxt-link>
                </li>
            </template>
            <template v-if="isAdmin">
                <br>
                <li>
                    <font-awesome-icon :icon="['fas', 'check']" class="color-icon-sb" /><nuxt-link to="#" class="text-white"> Reservar estacionamiento</nuxt-link>
                </li>
            </template>
            <template v-if="isAdmin">
                <br>
                <li>
                    <font-awesome-icon :icon="['fas', 'building']" class="color-icon-sb" /><nuxt-link to="#" class="text-white"> Nuevo edificio</nuxt-link>
                </li>
            </template>
            <!-- <template v-if="isAdmin">
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'edit']" class="color-icon-sb" /><a href="#" class="text-white"> Asignar estacionamiento</a>
            </li>
            </template> -->
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'address-book']" class="color-icon-sb"/><a href="#" class="text-white"> Asignar vigilante</a>
            </li>
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'calendar-check']" class="color-icon-sb" /><a href="#" class="text-white"> Crear eventos</a>
            </li>
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'check']" class="color-icon-sb" /><a href="#" class="text-white"> Reservar estacionamiento</a>
            </li>
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'building']" class="color-icon-sb" /><a href="#" class="text-white"> Nuevo edificio</a>
            </li>
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'address-book']" class="color-icon-sb" /><a href="#" class="text-white"> Asignar Administradores</a>
            </li>
            <br>
            <li class="exHover">
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="color-icon-sb" /><a href="#" class="text-white" @click="logout"> Cerrar Sesion</a>
            </li>
        </ul>
    </div>
    </nav>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {},
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
    height: 100%;
    /* top layer */
    z-index: 9999;
    background: rgba(152, 9, 78, 0.774);
}

.color-icon-sb {
    color: #ffff;
}

.exHover:hover {
    background: rgb(243, 191, 214);
    color: #ffff;
    padding: 10px;
    border-radius: 3px;
}
</style>
