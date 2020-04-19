<template>
  <v-app>
    <v-app-bar
      hide-on-scroll
      id="menu"
      app
      color="alert"
      dark
      src="./assets/titulo.png"
    >
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

      <v-btn text v-if="usuario && usuario.usuarioID !== null">
        <span class="mr-2" @click="cerrarSesion">Cerrar Sesion</span>
      </v-btn>

      <v-menu
              left
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" >
            <span class="display-1">+</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
                  @click="add()"
          >
            <v-list-item-title>Añadir nota</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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