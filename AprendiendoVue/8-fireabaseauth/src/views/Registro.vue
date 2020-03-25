<template>
    <div>
        <h1>Registro de Usuarios</h1>
        <form @submit.prevent="crearUsuario({email: email, pass:pass1})">
            <input v-model="email" type="email" placeholder="Email">
            <input v-model="pass1" type="password" placeholder="Contraseña">
            <input v-model="pass2" type="password" placeholder="Confirmar contraseña">
            <button type="submit" :disabled="!desactivar">Crear Usuario</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
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
          ...mapState(['error']),
        desactivar(){
              return this.pass1 === this.pass2 && this.pass1 !== ''
        }
        },
        methods:{
            ...mapActions(['crearUsuario'])
        }
    }
</script>

<style scoped>

</style>