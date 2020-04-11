<template>
  <div>
    <v-row>
      <v-col col="12">
        <v-card>
          <v-date-picker
            full-width v-model="fecha"
            locale="es-es"
            min="1984"
            :max="maximo"
            @change="getDolar(fecha)"
          >
          </v-date-picker>
        </v-card>
        <v-card color="error" dark class="display-1 text-center">
          <v-card-text>
            {{valor}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapMutations} from 'vuex'
export default {
  name: 'Home',
  data(){
    return{
      fecha: new Date().toISOString().substr(0,10),
      maximo: new Date().toISOString().substr(0,10),
      valor: null
    }
  },
  methods:{
    async getDolar(dia){
      let arrayDia = dia.split(['-']);
      let ddmmyy =arrayDia[2]+'-'+arrayDia[1]+'-'+arrayDia[0];
      try{
        this.mostrarLoading({titulo: 'Accediendo a informacion'})
        let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
        if(datos.data.serie.length > 0){
          this.valor = await datos.data.serie[0].valor
        }else{
          this.valor = "Sin resultados"
        }
      }
      catch (e) {
        //console.log(e)
      }finally {
        this.ocultarLoading()
      }
    },
    ...mapMutations(['mostrarLoading', 'ocultarLoading'])
  },
  created() {
    this.getDolar(this.fecha)
  }
}
</script>
