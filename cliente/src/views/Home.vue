<template>
  <div>
    <v-btn primary @click="crearJWT(parametro)">JWT</v-btn>
    <v-btn @click="setUserId">SET</v-btn>
    <v-btn @click="getUserId">GET</v-btn>
    <v-btn @click="delUserId">DEL</v-btn><br><br>
    <v-file-input type="file"  accept="image/jpeg" v-model="file"/>
    <v-btn dark @click="uploadFile(file)">UPLOAD</v-btn><br><br>
    <h2>IMAGEN CARGADA DESDE EL SERVIDOR</h2>
    <div v-if="ruta"><img :src="ruta" width="200" height="150"></div>
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators';
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
  data(){
    return{
      parametro: '',
      file: null
    }
  },
  computed:{
    ...mapState(['nombre', "userId", 'ruta'])
  },
  validations:{
    selectdFile:{required}
  }
  ,
  methods:{
    ...mapActions(['getUserId','setUserId', 'delUserId','crearJWT', "uploadFile"])
  }
}
</script>
