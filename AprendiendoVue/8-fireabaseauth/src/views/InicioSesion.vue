<template>
    <div>
        <h1>Iniciar Usuario</h1>
        <form @submit.prevent="iniciarSesion({email: email, pass:pass})">
            <input v-model="email" type="email" placeholder="Email">
            <input v-model="pass" type="password" placeholder="Contraseña">
            <button type="submit">Acceder</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>

</style>