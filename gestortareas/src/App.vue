<template>
  <v-app>
    <v-navigation-drawer
            v-model="drawer"
            app
            bottom
            temporary
            clipped
            color="#f5f5f5"
    >
      <v-list
              dense
      >
        <v-list-item-group
                active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-if="usuario && usuario.usuarioID !== null">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="cerrarSesion">
              Cerrar Sesion
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="usuario && usuario.usuarioID !== null">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="add">
              Añadir Tarea
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      id="menu"
      app
      color="alert"
      dark
      src="./assets/titulo.png"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="usuario && usuario.usuarioID !== null">*</v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <router-link to="/">
        <v-img
          alt="Tarea LOGO"
          class="shrink mr-2"
          contain
          src="http://localhost/servidor/img/logo.png"
          transition="scale-transition"
          width="50"
        />
        </router-link>

        <p class="display-1 pa-5 mt-3">MIS TAREAS</p>
      </div>

      <v-spacer></v-spacer>
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
      drawer: false
    }
  },
  methods:{
    ...mapActions(['cerrarSesion']),
    add(){
      router.push({name: 'Add'})
    }
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