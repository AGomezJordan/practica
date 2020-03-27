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
    tarea: {nombre: '', id: '', comentario: ''}
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
    }
  },
  actions: {
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
            commit('setError',err.message)
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
      });
      commit('setTareas', tareas)
    },
    getTarea({commit}, id){
        const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(id).get().then((doc) => {
          //console.log(doc.data())
          //console.log(doc.id)
          let tarea = doc.data();
          tarea.id = doc.id;
          commit('setTarea', tarea)
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
        const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).add({
          nombre: tarea.nombre,
          comentario: tarea.comentario
      })
          .then(() => {
              router.push({name: 'inicio'})
          })
    },
    eliminar({commit, dispatch}, id){
        const usuario = firebase.auth().currentUser;
      db.collection(usuario.email).doc(id).delete()
          .then(() =>{
              console.log("Tarea Eliminada")
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
      }
  },
  modules: {
  }
})
