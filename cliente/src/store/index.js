import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import KJUR from 'jsrsasign'
import axios from 'axios'
import decode from 'jwt-decode'

export default new Vuex.Store({
  state: {
    nombre:'asd',
    userId: '',
    ruta: ''
  },
  mutations: {
    setNombre(state, payload){
      state.nombre = payload;
    },
    setRuta(state, payload){
      state.ruta = payload
    }
  },
  actions: {
    async crearJWT({commit},parametro){
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ:"JWT"}; //Cabecera de JWT
      let payload= {name: parametro, admin: true}; //Datos de JWT
      let jwt = jws.sign("HS256", header, payload, {utf8:secret}); //Firma de JWT
      console.log("Cadena JWT")
      console.log(jwt);

      //Enviar jwt
      console.log("Llamada axios")
      let response = await axios.get("http://localhost:80/servidor/api.php?jwt="+jwt); //Llamada al API
      let data = response.data; //Recoger datos
      console.log(data)

      if (data.status) { //Si no hay error con JWT enviado

        //verify JWT
        console.log("Comprobar JWT")
        let token = data.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) { //Valido, decodificamos el jwt
          console.log(isValid)
          let decoded = decode(token)
          let data = decoded.data

          //Comprobar status
          if (data.status) { //Datos como los esperabamos
            console.log("Recibido")
            commit('setNombre', data.nombre);
          } else { //Datos erroneos
            commit('setNombre', "Datos devueltos erroneos");
          }

        } else { //Si no es valido
          console.log(isValid)
          commit('setNombre', "Datos devueltos corruptos");
        }

      }else{ // SI hay error con JWT enviado
        commit('setNombre', data.mensaje);
      }
    },
    setUserId(){
      let userId = "alvaroGomez1234"
      localStorage.setItem('userID', userId)
      console.log("Guardado")
    },
    getUserId({commit}){
      let userId = localStorage.getItem('userID')
      console.log(userId)
    },
    delUserId(){
      localStorage.removeItem('userID')
      console.log('Borrado')
    },
    async uploadFile({commit}, file){
      console.log(file)
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ:"JWT"}; //Cabecera de JWT
      let payload= {nombre: "Alvaro", admin: true, file: file}; //Datos de JWT
      let jwt = jws.sign("HS256", header, payload, {utf8:secret}); //Firma de JWT
      console.log("Cadena JWT")
      console.log(jwt);

      let formd= new FormData();
      formd.append("jwt", jwt)
      formd.append("foto", file)

      let response = await axios.post('http://localhost:80/servidor/api.php', formd)
      console.log(response.data.ruta)
      let ruta = 'http://localhost:80/servidor/'+response.data.ruta
      commit('setRuta', ruta)
    }
  },
  modules: {
  }
})
