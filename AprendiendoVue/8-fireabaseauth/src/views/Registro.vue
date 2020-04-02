<template>
    <div class="container">
        <h1>Registro de Usuarios</h1>
        <form @submit.prevent="crearUsuario({email: $v.email.$model, pass:$v.pass1.$model})">
            <!-- Email -->
            <small v-if="!$v.email.required" class="text-danger d-block">Campo requerido*</small>
            <small v-if="!$v.email.email" class="text-danger d-block">Email invalido</small>
            <input v-model="$v.email.$model" type="email" placeholder="Email"
           class="form-control my-2" :class="{'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid}">

            <!-- Contraseña -->
            <small v-if="!$v.pass1.required" class="text-danger d-block">Campo requerido*</small>
            <small v-if="!$v.pass1.minLength" class="text-danger d-block">Minimo 6 caracteres</small>
            <input v-model="$v.pass1.$model" type="password" placeholder="Contraseña"
            class="form-control my-2" :class="{'is-invalid': $v.pass1.$error, 'is-valid': !$v.pass1.$invalid}">

            <!-- Confirmar contraseña -->
            <small v-if="!$v.pass2.required" class="text-danger d-block">Campo requerido*</small>
            <small v-if="!$v.pass2.sameAs" class="text-danger d-block">Las contraseñas no coinciden</small>
            <input v-model="$v.pass2.$model" type="password" placeholder="Confirmar contraseña"
            class="form-control my-2" :class="{'is-invalid': $v.pass2.$error, 'is-valid': !$v.pass2.$invalid}">

            <!-- Boton -->
            <br><button class="btn btn-dark" type="submit" :disabled="$v.$invalid">Crear Usuario</button>
        </form>
        <p v-if="error === 'auth/email-already-in-use'" class="text-danger">El usuario ya esta registrado</p>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
    export default {
        name: "Registro",
        data(){
            return{
                email: '',
                pass1: '',
                pass2: ''
            }
        },
        computed:{
          ...mapState(['error'])
        },
        methods:{
            ...mapActions(['crearUsuario'])
        },
        validations:{
            email:{required, email},
            pass1:{required, minLength:minLength(6)},
            pass2:{required, sameAs:sameAs('pass1')}
        }
    }
</script>

<style scoped>

</style>