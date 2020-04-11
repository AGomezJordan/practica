import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
  },
  actions: {
    async conexionServer(){
        let ruta= 'http://localhost/Practica/api.php?func=prueba&texto=hola&user=lalo';
        let file = '../../../servidor/api.php?func=prueba&texto=hola&user=lalo';
        const data = await fetch(ruta);
        const prueba = await data.json()
        console.log(prueba)
    }
  },
  modules: {
  }
})
