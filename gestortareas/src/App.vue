<template>
  <v-app>
    <v-app-bar
      id="menu"
      app
      color="alert"
      dark
      src="./assets/titulo.png"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Tarea LOGO"
          class="shrink mr-2"
          contain
          src="http://localhost/servidor/img/logo.png"
          transition="scale-transition"
          width="50"
        />

        <p class="display-1">MIS TAREAS</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn text v-if="usuario && usuario.usuarioID !== null">
        <span class="mr-2" @click="cerrarSesion">Cerrar Sesion</span>
      </v-btn>
      <v-btn text v-if="(!usuario || usuario.usuarioID === null) && !registro">
        <span class="mr-2" @click="crearCuenta">Crear cuenta</span>
      </v-btn>
      <v-btn text v-if="(!usuario || usuario.usuarioID === null) && registro">
        <span class="mr-2" @click="iniciarSesion">Iniciar Sesion</span>
      </v-btn>
    </v-app-bar>

    <v-content id="content">
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import router from '@/router'
export default {
  name: 'App',
  data(){
    return{
      registro: false
    }
  },
  methods:{
    iniciarSesion(){
      this.registro = false
      router.push({name: 'IniciarSesion'})
    },
    crearCuenta(){
      this.registro = true
      router.push({name: 'Registro'})
    },
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapState(['usuario'])
  }
};
</script>
<style scoped>
#menu{
  opacity: .8;
}
#content{
    background-image:url("https://picsum.photos/1920/1080?random") ;
    background-repeat: no-repeat ;
    background-size: cover ;
}
</style>