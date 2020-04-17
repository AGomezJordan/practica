import Vue from 'vue'
import Vuex from 'vuex'
import KJUR from 'jsrsasign'
import decode from 'jwt-decode'
import axios from 'axios'

Vue.use(Vuex)
import router from '@/router'
export default new Vuex.Store({
  state: {
    usuario: {
      usuarioID: localStorage.getItem('usuarioID') || null,
      tipo: localStorage.getItem('tipo') || null
    },
    mensaje:'',
    dialog: false
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
    borrarUsuario(state){
      state.usuario = null
    },
    setMensaje(state, payload){
      state.mensaje = payload
    },
    setDialog(state, payload){
      state.dialog = payload
    }
  },
  actions: {
    async iniciarSesion({commit},payload) {
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {usuario: payload.usuario, password: payload.password, func: 'login'}; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)

      let response = await axios.post('http://localhost:80/servidor/api.php', formd)
      let datos = response.data
      console.log(jwt)
      console.log(datos)

      if (datos.status) {
        //verify JWT
        console.log("Comprobar JWT")
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) { //Valido, decodificamos el jwt
          console.log(isValid)
          let decoded = decode(token)
          console.log("JWT devuelto")
          //Comprobar status
          if (decoded.status) { //Datos como los esperabamos
            console.log("Recibido")
            if (decoded.login){ //Si esta logeado
              let data = decoded.data;
              localStorage.setItem('usuarioID', data.usuarioID)
              localStorage.setItem('tipo', data.tipo)
              commit('setUsuario', data)
              commit('setMensaje', false)
              commit('setDialog', true)
              router.push({name: 'Home'})
            }else{ //Si no esta logeado
              commit('setDialog', true)
              commit('setMensaje', decoded.mensaje)
            }
          } else { //Datos erroneos
            console.log("PROBLEMA CON JWT")
          }

        } else { //Si no es valido
          console.log(isValid)
          commit('setMensaje', "Los datos recibidos del servidor pueden que esten corruptos, se han rechazo");
        }
      }else{
        commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo");
      }
    },
    cerrarSesion({commit}){
      commit('setDialog', false)
      localStorage.removeItem('usuarioID')
      localStorage.removeItem('tipo')
      commit('borrarUsuario')
      router.push({name: 'IniciarSesion'})
    },
    registrarUsuario({commit}, payload){
      console.log("Registro")
      console.log(payload)
    }
  },
  modules: {
  }
})
