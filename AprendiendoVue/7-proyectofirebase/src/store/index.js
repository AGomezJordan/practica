import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase.js'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {nombre: '', id: '', comentario: ''}
  },
  mutations: {
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
    getTareas({commit}){
      const tareas = [];
      db.collection("tareas").get().then((snapshot) => {
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
    db.collection("tareas").doc(id).get().then((doc) => {
        //console.log(doc.data())
        //console.log(doc.id)
        let tarea = doc.data();
        tarea.id = doc.id;
        commit('setTarea', tarea)
    })
  },
  editar({commit}, tarea){
    db.collection("tareas").doc(tarea.id).update({
        nombre: tarea.nombre,
        comentario: tarea.comentario
    })
    .then(() => {
        router.push({name: 'Inicio'})
    })
  },
  agregar({commit}, tarea){
        db.collection("tareas").add({
            nombre: tarea.nombre,
            comentario: tarea.comentario
        })
        .then(() => {
            router.push({name: 'Inicio'})
        })
  },
  eliminar({commit, dispatch}, id){
        db.collection("tareas").doc(id).delete()
            .then(() =>{
                console.log("Tarea Eliminada")
                //dispatch('getTareas')
                commit('eliminar',id)
            })
  }
  }
})
