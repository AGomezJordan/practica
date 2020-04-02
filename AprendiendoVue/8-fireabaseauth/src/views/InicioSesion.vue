<template>
    <div class="container">
        <h1>Iniciar Usuario</h1>
        <form @submit.prevent="iniciarSesion({email: $v.email.$model, pass:$v.pass.$model})">
            <input :class="{'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid}" class="form-control my-2"
             v-model="$v.email.$model" type="email" placeholder="Email">
            <p class="text-danger" v-if="!$v.email.required"><small>Campo requerido*</small></p>
            <p class="text-danger" v-if="!$v.email.email"><small>Introduzca un email valido</small></p>
            <input :class="{'is-invalid': $v.pass.$error, 'is-valid': !$v.pass.$invalid}" class="form-control my-2"
             v-model="$v.pass.$model" type="password" placeholder="Contraseña">
            <p class="text-danger" v-if="!$v.pass.required"><small>Campo requerido*</small></p>
            <p class="text-danger" v-if="!$v.pass.minLength"><small>Minimo 6 caracteres</small></p>
            <button type="submit" class="btn btn-dark" :disabled="$v.$invalid">Acceder</button>
        </form><br>
        <p>{{error}}</p>
    </div>
</template>

<script>
    import {email, required, minLength } from 'vuelidate/lib/validators'
    import {mapActions, mapState} from 'vuex'
    export default {
        name: "InicioSesion",
        data(){
            return{
                email: '',
                pass: ''
            }
        },
        computed:{
          ...mapState(['error'])
        },
        methods:{
            ...mapActions(['iniciarSesion'])
        },
        validations:{
            email:{required, email},
            pass:{required, minLength:minLength(6)}
        }
    }
</script>

<style scoped>

</style>