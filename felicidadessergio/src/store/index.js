import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import logger from "vuex/dist/logger";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    code: '',
    pcode:'',
    preguntas:[]
  },
  mutations: {
    ampliarcode(state, num){
      num = num.toString();
      state.code += num + " ";
      state.pcode = state.code;
    }
  },
  actions: {
    p2({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta2'})
    },
    p3({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta3'})
    },
    p4({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta4'})
    },
    p5({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta5'})
    },
    p6({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta6'})
    },
    p7({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta7'})
    },
    p8({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta8'})
    },
    p9({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta9'})
    },
    p10({commit}, num){
      commit('ampliarcode', num)
      router.push({name: 'Pregunta10'})
    },
    final({commit,state},num){
      commit('ampliarcode', num)
      router.push({name: 'Final'})
      state.pcode = ''
    },
    resetear({state}){
      state.code = ''
      state.pcode = ''
    }
  },
  modules: {
  }
})
