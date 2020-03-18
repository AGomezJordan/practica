const store = new Vuex.Store({
    state:{
        numero: 10,
    },
    mutations:{
        aumentar(state){
            state.numero++
        }
    }
});

new Vue({
    el: '#app',
    store: store
});