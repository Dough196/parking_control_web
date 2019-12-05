<template>
<div class="bg">
    <Cabecera></Cabecera>
    <div class="container mt-5">
        <br>
        <br>
        <div class="d-flex justify-content-center h-100">
            <div class="card bg-login w-50">
                <div class="card-header">
                    <div class="text-center pt-3">
                        <img src="~/assets/images/Logo.png" width="25%" alt="">
                        <h4 class="mt-2 text-light">LOGIN</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="input-group form-group">
                            <div class="input-group-prepend"> <span class="input-group-text"><i
                                        class="fas fa-user"></i></span> </div> <input v-model="usuario" type="text" class="form-control" placeholder="username" required>
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend"> <span class="input-group-text"><i
                                        class="fas fa-key">
                                        </i></span></div> <input v-model="contra" type="password" class="form-control" placeholder="password" required>
                        </div>
                        <!-- <div class="row align-items-center remember"> <input type="checkbox">Remember Me </div> -->
                        <div class="form-group text-center"> <input type="submit" value="Ingresar" class="btn login_btn bg-boton text-white">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import Cabecera from "../components/Cabecera.vue"

export default {
    data() {
        return {
            usuario: 'admin@admin.com',
            contra: 'password',
        }
    },
    methods: {
        login() {
            this.$auth
                .loginWith('local', {
                    data: {
                        email: this.usuario,
                        password: this.contra
                    }
                })
                .then(() => {
                    this.$router.push({
                        path: '/'
                    })
                })
                .catch(() => {
                    alert('Invalid credentials')
                })
        }
    },
    components: {
        Cabecera
    }
}
</script>

<style>

body {
      /* The image used */
    background-image: url("../assets/images/bgLogin.jpg");
    justify-content: center;
}

    .bg-boton {
        background: #98094d;
        padding: 5dp;
        border: #FFFFFF solid 1px;

    }

    .bg-login {
        background: #7711447e;
    }

    .bg {

        /* Full height */
        height: 100vh;
        width: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }
</style>