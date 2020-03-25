import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
var firebase = require("firebase/app");

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: ''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state,payload){
      state.error = payload
    }
  },
  actions: {
    crearUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
          .then(res=>{
            commit('setUsuario',{email: res.user.email, uid: res.user.uid})
            router.push({name: 'inicio'})
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
