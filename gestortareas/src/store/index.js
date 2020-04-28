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
    tareas: [],
    tarea: [],
    mensaje:'',
    mensaje2: '',
    dialog: false,
    cargando: false
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
    setMensaje2(state, payload){
      state.mensaje2 = payload
    },
    setDialog(state, payload){
      state.dialog = payload
    },
    setTareas(state, payload){
      state.tareas = payload
    },
    setTarea(state, payload){
      state.tarea = payload
    },
    setCargando(state, payload){
      state.cargando = payload
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

      let response = await axios.post('https://makreim.000webhostapp.com/servidor/api.php', formd)
      let datos = response.data

      if (datos.status) {
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) { //Valido, decodificamos el jwt
          let decoded = decode(token)
          //Comprobar status
          if (decoded.status) { //Datos como los esperabamos
            if (decoded.login){ //Si esta logeado
              let data = decoded.data;
              localStorage.setItem('usuarioID', data.usuarioID)
              localStorage.setItem('tipo', data.tipo)
              commit('setUsuario', data)
              commit('setMensaje', false)
              commit('setMensaje2', false)
              commit('setDialog', false)
              router.push({name: 'Home'})
            }else{ //Si no esta logeado
              commit('setDialog', true)
              commit('setMensaje', decoded.mensaje)
              commit('setMensaje2', "Upss.. Algo no va bien")
            }
          } else { //Datos erroneos
            commit('setDialog', true)
            commit('setMensaje', "Datos erroneos")
            commit('setMensaje2', "Upss.. Algo no va bien")
          }

        } else { //Si no es valido
          commit('setMensaje', "Los datos recibidos del servidor pueden que esten corruptos, se han rechazo");
          commit('setMensaje2', "Upss.. Algo no va bien")
          commit('setDialog', true)
        }
      }else{
        commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo");
        commit('setMensaje2', "Upss.. Algo no va bien")
        commit('setDialog', true)
      }
    },
    cerrarSesion({commit}){
      commit('setDialog', false)
      localStorage.removeItem('usuarioID')
      localStorage.removeItem('tipo')
      commit('borrarUsuario')
      router.push({name: 'IniciarSesion'})
    },
    async registrarUsuario({commit}, payload){
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {usuario: payload.usuario, password: payload.password, func: 'signIn'}; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)

      let response = await axios.post('https://makreim.000webhostapp.com/servidor/api.php', formd)
      let datos = response.data

      if (datos.status){
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if(isValid){
          let decoded = decode(token)
          if (decoded.status){
            if (decoded.signIn){
              commit('setDialog', true)
              commit('setMensaje', "Usuario registrado correctamente")
              commit('setMensaje2', "GENIAL!!")
              router.push({name: 'IniciarSesion'})
            }else{
              commit('setMensaje', "Usuario ya registrado, pruebe otro usuario")
              commit('setMensaje2', "Upss.. Algo no va bien")
              commit('setDialog', true)
            }
          }else{
            commit('setDialog', true)
            commit('setMensaje', "Datos erroneos")
            commit('setMensaje2', "Upss.. Algo no va bien")
          }
        }else{
          commit('setDialog', true)
          commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
          commit('setMensaje2', "Upss.. Algo no va bien")
        }

      }else{
        commit('setDialog', true)
        commit('setMensaje', "Ha ocurrido un problema, vuelve a intentarlo")
        commit('setMensaje2', "Upss.. Algo no va bien")
      }
    },
    async addNota({commit, state}, payload){
      commit('setCargando', true);
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {
        func: 'addNota',
        titulo: payload.titulo,
        subtitulo: payload.subtitulo,
        articulo: payload.articulo,
        usuarioID: state.usuario.usuarioID,
      }; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)
      formd.append("foto", payload.foto)

      let response = await axios.post('https://makreim.000webhostapp.com/servidor/api.php', formd)
      let datos = response.data

      if(datos.status){
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if(isValid) {
          let decoded = decode(token)
          if(decoded.status){
            if(decoded.insert){
              router.push({name: 'Home'})
            }else{
              commit('setMensaje', "No se ha podido añadir la tarea. Vuelva a intentarlo")
              commit('setMensaje2', "Upss.. Lo sentimos :(")
              commit('setDialog', true)
            }
          }else{
            commit('setDialog', true)
            commit('setMensaje', "Datos erroneos")
            commit('setMensaje2', "Upss.. Algo no va bien")
          }
        }else{
          commit('setDialog', true)
          commit('setMensaje', "Datos erroneos")
          commit('setMensaje2', "Upss.. Algo no va bien")
        }
      }else{
        commit('setDialog', true)
        commit('setMensaje', "Ha ocurrido un problema vuelva a intentarlo")
        commit('setMensaje2', "Upss.. Algo no va bien")
      }
      commit('setCargando', false);
    },
    async getTareas({commit, state}){
      commit('setCargando', true);
      try{
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {
        func: 'getTareas',
        usuarioID: state.usuario.usuarioID
      }; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)
      let response = await axios.post('https://makreim.000webhostapp.com/servidor/api.php', formd)
      let datos = response.data
      if (datos.status) {
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) {
          let decoded = decode(token)
          if (decoded.status) {
            if (decoded.data) {
              commit('setTareas', decoded.data)
            } else {
              commit('setDialog', true)
              commit('setMensaje', "No se ha podido cargar las tareas, recargue la pagina")
              commit('setMensaje2', "Upss.. Algo no va bien")
            }
          } else {
            commit('setDialog', true)
            commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
            commit('setMensaje2', "Upss.. Algo no va bien")
          }
        } else {
          cocommit('setDialog', true)
          commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
          commit('setMensaje2', "Upss.. Algo no va bien")
        }
      }
        commit('setCargando' , false)
      }catch (e) {
        commit('setCargando' , false)
        commit('setTareas', null)
      }
    },
    async getTarea({commit}, payload){
      commit('setCargando', true);
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {
        func: 'getTarea',
        tarea: payload,
        usuarioID: localStorage.getItem('usuarioID')
      }; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)
      let response = await axios.post('https://makreim.000webhostapp.com/servidor/api.php', formd)
      let datos = response.data
      if (datos.status) {
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) {
          let decoded = decode(token)
          if (decoded.status) {
            if (decoded.data) {
              commit('setTarea', decoded.data)
            } else {
              commit('setDialog', true)
              commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
              commit('setMensaje2', "Upss.. Algo no va bien")
            }
          } else {
            commit('setDialog', true)
            commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
            commit('setMensaje2', "Upss.. Algo no va bien")
          }
        } else {
          commit('setDialog', true)
          commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
          commit('setMensaje2', "Upss.. Algo no va bien")
        }
      }
      commit('setCargando' , false)
    },
    async borrarTarea({commit, state}, payload){
      //commit('setCargando', true);
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {
        func: 'borrarTarea',
        tarea: payload,
        usuarioID: localStorage.getItem('usuarioID')
      }; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)
      let response = await axios.post('https://makreim.000webhostapp.com/servidor/api.php', formd)
      let datos = response.data

      if (datos.status) {
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if (isValid) {
          let decoded = decode(token)
          if (decoded.status) {
            if (decoded.borrado) {
              state.tareas = state.tareas.filter(doc =>{
                return doc.cod != payload
              })

            } else {
              commit('setMensaje', "No se ha eliminado la tarea")
              commit('setMensaje2', "Upss.. Algo no va bien")
              commit('setDialog', true)
            }
          } else {
            commit('setDialog', true)
            commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
            commit('setMensaje2', "Upss.. Algo no va bien")
          }
        } else {
          commit('setDialog', true)
          commit('setMensaje', "Ha ocurrido un problema, vuelva a intentarlo")
          commit('setMensaje2', "Upss.. Algo no va bien")
        }
      }
    },
    async editarNota({commit}, payload){
      commit('setCargando', true);
      let jws = KJUR.jws.JWS; //Objeto para tratar JWT
      let secret = "Alvaro1234@asdfgh"; // Clave privada

      //crear JWT
      let header = {alg: "HS256", typ: "JWT"}; //Cabecera de JWT
      let data = {
        func: 'editTarea',
        tarea: payload.id,
        titulo: payload.titulo,
        subtitulo: payload.subtitulo,
        articulo: payload.articulo,
        usuarioID: localStorage.getItem('usuarioID')

      }; //Datos de JWT
      let jwt = jws.sign("HS256", header, data, {utf8: secret}); //Firma de JWT

      let formd = new FormData();
      formd.append("jwt", jwt)
      formd.append('foto', payload.foto)
      let response = await axios.post('https://makreim.000webhostapp.com/servidor/api.php', formd)
      let datos = response.data

      if(datos.status){
        //verify JWT
        let token = datos.token;
        let isValid = jws.verifyJWT(token, {utf8: secret}, {alg: ["HS256"]})

        if(isValid) {
          let decoded = decode(token)
          if(decoded.status){
            if(decoded.edit){
              router.push({name: 'Home'})
            }else{
              commit('setMensaje', "No se ha podido editar la tarea. Vuelva a intentarlo")
              commit('setMensaje2', "Upss.. Lo sentimos :(")
              commit('setDialog', true)
            }
          }else{
            commit('setDialog', true)
            commit('setMensaje', "Datos erroneos")
            commit('setMensaje2', "Upss.. Algo no va bien")
          }
        }else{
          commit('setDialog', true)
          commit('setMensaje', "Datos erroneos")
          commit('setMensaje2', "Upss.. Algo no va bien")
        }
      }else{
        commit('setDialog', true)
        commit('setMensaje', "Ha ocurrido un problema vuelva a intentarlo")
        commit('setMensaje2', "Upss.. Algo no va bien")
      }
      commit('setCargando', false);
    }
  },
  modules: {
  }
})
