<template>
  <v-app>
    <v-bottom-navigation
            v-model="bottomNav"
            dark
    >
      <v-btn  @click="push('Home')">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn  @click="cerrarSesion()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

    </v-bottom-navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import router from '@/router'
  import {mapActions} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      bottomNav: 3
    }
  },
  methods:{
    push(name){
        router.push({name})
    },
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        case 3:
          return 'indigo'
      }
    }
  }
};
</script>
