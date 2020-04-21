<template>
  <div>
    <v-container v-if="cargando" class="display-1 text-center">
        <h3>Cargando tus tareas :)</h3>
        <square-loader color="purple"></square-loader>
    </v-container>
    <v-container v-if="tareas && !cargando">
      <v-row>
        <v-col lg="4" md="6" cols="12" v-for="tarea of tareas">
          <v-btn
                  elevation="10"
                  @click="edit(tarea.cod)"
                  fab
                  color="success"
                  class="btnfloat"
          >
            <span class="white--text">EDIT</span>
          </v-btn>
          <v-btn
                  elevation="10"
                  @click="dialogalertActive(tarea.cod)"
                  fab
                  color="error"
                  class="btnfloatDel"
          >
            <span class="white--text">DEL</span>
          </v-btn>
          <div class="tarjeta">
            <v-card
              class="pa-5 tarea"
              :to="{name: 'Tarea', params:{id: tarea.cod}}"
            >
              <v-card-text><v-img :src="tarea.foto" aspect-ratio="1.7"></v-img></v-card-text>
              <v-card-title>{{tarea.titulo}}</v-card-title>
              <v-card-subtitle>{{tarea.subtitulo}}</v-card-subtitle>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <Mensaje></Mensaje>
      <v-row justify="center">
        <v-dialog
                v-model="dialogalert"
                max-width="290"
                persistent
        >
          <v-card>
            <v-card-title class="headline display-3">Piensalo dos veces...</v-card-title>

            <v-card-text>
              ¿Seguro que quieres eliminar la tarea?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                      color="green darken-1"
                      text
                      @click="del()"
              >
                SI
              </v-btn>
              <v-btn
                      color="green darken-1"
                      text
                      @click="dialogalert = false"
              >
                NO
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import router from '@/router'
import Mensaje from "../components/Mensaje";
import SquareLoader from 'vue-spinner/src/SquareLoader'
export default {
  name: 'Home',
  data(){
    return{
      dialogalert: false,
      temporalID: ''
    }
  },
  created(){
    this.getTareas()
  },
  components: {Mensaje, SquareLoader},
  methods:{
    dialogalertActive(cod){
      this.dialogalert = true;
      this.temporalID = cod
    },
    del(){
      this.dialogalert = false
      this.borrarTarea(this.temporalID)
      this.temporalID = ''
    },
    edit(n){
      router.push({name: 'Tarea', params: {id: 'EditarTarea'+n}})
    },
    ...mapActions(['getTareas', 'borrarTarea']),
  },
  computed:{
      ...mapState(['tareas', 'cargando'])
  }
}
</script>
<style scoped>
  .tarjeta{
    border-radius: 50px 50px 50px 50px;
    overflow: hidden;
  }
  .tarjeta:hover{
    box-shadow: 0px 0px 0px 11px rgb(105, 104, 0);
    transition: .4s;
  }
  a:link, a:visited, a:active {
    text-decoration:none;
  }
  .btnfloat{
    top: 240px;
    left: 300px;
    z-index: 2;
  }
  .btnfloatDel{
    top: 240px;
    left: 180px;
    z-index: 2;
  }
</style>
