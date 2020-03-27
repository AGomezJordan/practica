import Vue from 'vue'
import VueRouter from 'vue-router'
var firebase = require("firebase/app");

Vue.use(VueRouter)

const routes = [
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/Inicio.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/iniciarsesion',
    name: 'iniciarsesion',
    component: () => import('../views/InicioSesion.vue')
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: () => import('../views/Agregar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import('../views/Editar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mostrar/:id',
    name: 'mostrar',
    component: () => import('../views/Mostrar.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth)
  var user = firebase.auth().currentUser;

  if (rutaProtegida && !user){
    next({name: 'iniciarsesion'})
  }else{
    next()
  }
})

export default router
