import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
var firebase = require("firebase/app");
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

require("firebase/app");
require("firebase/auth");
//require("firebase/database");
require("firebase/firestore");
//require("firebase/messaging");
//require("firebase/functions");
var firebaseConfig = {
  apiKey: "AIzaSyBGUZQc8-nj20P3BVq817UrdG8OoUO6inQ",
  authDomain: "fir-auth-8ce70.firebaseapp.com",
  databaseURL: "https://fir-auth-8ce70.firebaseio.com",
  projectId: "fir-auth-8ce70",
  storageBucket: "fir-auth-8ce70.appspot.com",
  messagingSenderId: "819381632676",
  appId: "1:819381632676:web:3d214b2963369d1b5eb031"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore();
export default firebaseApp.firestore();

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) =>{
  console.log(user);
  if (user){
    store.dispatch('detectarUsuario', {email:user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

