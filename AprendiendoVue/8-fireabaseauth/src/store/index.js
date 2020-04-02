import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
var firebase = require("firebase/app");
import db from '@/main.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: '',
    tareas: [],
    tarea: {nombre: '', id: '', comentario: ''},
    carga: false,
    texto: ''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state,payload){
      state.error = payload
    },
    setTareas(state, tareas){
        state.tareas = tareas;
    },
    setTarea(state,tarea){
        state.tarea = tarea
    },
    eliminar(state,id){
        state.tareas = state.tareas.filter(doc =>{
            return doc.id != id
        })
    },
    cargarFirebase(state, playload){
        state.carga = playload
    }
  },
  actions: {
    buscador({commit, state}, payload){
        state.texto = payload.toLowerCase()
    },
    crearUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
          .then(res=>{
            commit('setUsuario',{email: res.user.email, uid: res.user.uid})
            router.push({name: 'inicio'})
            //Crear coleccion
              db.collection(res.user.email).add({
                  nombre: "tarea de ejemplo",
                  comentario: "Escribe en que consiste la tarea"
              })
              .then(() => {
                  router.push({name: 'inicio'})
              })
          })
          .catch(err=>{
            commit('setError',err.code)
          })
    },
    iniciarSesion({commit},playload){
      firebase.auth().signInWithEmailAndPassword(playload.email, playload.pass)
          .then(res =>{
            commit('setUsuario',{email: res.user.email, uid: res.user.uid})
            router.push({name: 'inicio'})
          })
          .catch(err =>{
            commit('setError', "Usuario o contraseña incorrecta")
          })
    },
    detectarUsuario({commit},playload){
    if (playload != null) {
        commit('setUsuario', {email: playload.email, uid: playload.uid})
    }else{
        commit('setUsuario', null)
    }
    },
    cerrarSesion({commit}){
    firebase.auth().signOut()
    commit('setUsuario',null)
    router.push({name: 'iniciarsesion'})
    },
    getTareas({commit}){
      commit('cargarFirebase', true);
      const usuario = firebase.auth().currentUser;
      const tareas = [];
      db.collection(usuario.email).get().then((snapshot) => {
          snapshot.forEach((doc) => {
              //console.log(doc.id);
              //console.log(doc.data())
              let tarea = doc.data();
              tarea.id = doc.id;
              tarea.comentario = doc.comentario;
              tareas.push(tarea);
          });
          setTimeout(() =>{
              commit('setTareas', tareas)
              commit('cargarFirebase', false);
          }, 500)
      });
    },
    getTarea({commit}, id){
        commit('cargarFirebase', true);
        const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(id).get().then((doc) => {
          //console.log(doc.data())
          //console.log(doc.id)
          let tarea = doc.data();
          tarea.id = doc.id;
          setTimeout(() =>{
              commit('cargarFirebase', false);
              commit('setTarea', tarea)
          }, 500)
      })
    },
    editar({commit}, tarea){
        const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(tarea.id).update({
          nombre: tarea.nombre,
          comentario: tarea.comentario
      })
          .then(() => {
              router.push({name: 'inicio'})
          })
    },
    agregar({commit}, tarea){
        commit('cargarFirebase', true);
        const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).add({
          nombre: tarea.nombre,
          comentario: tarea.comentario
      })
          .then(() => {
              commit('cargarFirebase', false);
              router.push({name: 'inicio'})
          })
    },
    eliminar({commit, dispatch}, id){
        const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(id).delete()
          .then(() =>{
              //dispatch('getTareas')
              commit('eliminar',id)
          })
    }
  },
  getters:{
      existeUsuario(state){
          if (state.usuario === null || state.usuario ==='' || state.usuario === undefined){
              return false
          }else{
              return true
          }
      },
      arrayFiltro(state){
          let data = [];
          for(let tarea of state.tareas){
              let nombre = tarea.nombre.toLowerCase();
              if (nombre.indexOf(state.texto) >= 0){
                  data.push(tarea);
              }
          }
          return data;
      }
  },
  modules: {
  }
})
