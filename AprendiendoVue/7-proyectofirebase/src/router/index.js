import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Editar.vue')
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Agregar.vue')
  },
  {
    path: '/mostrar/:id',
    name: 'mostrar',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Mostrar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
