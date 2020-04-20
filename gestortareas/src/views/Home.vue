<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="4" md="6" cols="12" v-for="n in 20">
          <v-btn
                  @click="edit(n)"
                  fab
                  color="success"
                  class="btnfloat"
          >
            <span class="white--text">EDIT</span>
          </v-btn>
          <div class="tarjeta">
            <v-card
              class="pa-5 tarea"
              :to="{name: 'Tarea', params:{id: 'Tarea-'+n}}"
            >
              <v-card-text><v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img></v-card-text>
              <v-card-title>NOTA {{n}}</v-card-title>
              <v-card-text>
                daslkfjasd fklasdfas dfasdf asdf asdf asdfasdfa sdfasdflkas dflajsdfasd
                fas dfkasjdfklasdfjlkasdj flasdjflañksdj fñlakdsfj lakdsj fadsfasdf kadf
                 adflkadsf jakldsjfkladsjfkadsjf kasdj fkadsjf kasdjf kasdfj asdjf akdsf
                aadslkfjasdlfjasdlfklñadskfñlads fadfladkf alkld fkdñf kañsld kfladskf lads
                asdlflasdf jkads fak jkad jkd k kd fjkad jfkaljdsfklads fkak dfak ads kad
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <Mensaje></Mensaje>
    </v-container>
  </div>
</template>

<script>
import router from '@/router'
import Mensaje from "../components/Mensaje";
export default {
  name: 'Home',
  components: {Mensaje},
  methods:{
    edit(n){
      router.push({name: 'Tarea', params: {id: 'EditarTarea'+n}})
    }
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
</style>
