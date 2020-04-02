<template>
  <div id="app" class="container">
    <nav class="navbar-fixed-top navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" v-if="existeUsuario">
            <router-link class="nav-link" :to="{name: 'inicio'}">INICIO</router-link>
          </li>
          <li class="nav-item active" v-if="!existeUsuario">
            <router-link class="nav-link" :to="{name: 'registro'}">REGISTRO</router-link>
          </li>
          <li class="nav-item active" v-if="!existeUsuario">
            <router-link class="nav-link" :to="{name: 'iniciarsesion'}">INICIAR SESION</router-link>
          </li>
          <li class="nav-item active" v-if="existeUsuario">
            <a class="nav-link" @click="cerrarSesion">CERRAR SESION</a>
          </li>

        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'App',
    methods:{
      ...mapActions(['cerrarSesion'])
    },
    computed:{
      ...mapGetters(['existeUsuario'])
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
