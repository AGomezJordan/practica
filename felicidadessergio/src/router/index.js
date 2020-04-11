import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pregunta1',
    name: 'Pregunta1',
    component: () => import('../views/Pregunta1.vue')
  },
    {
      path: '/pregunta2',
      name: 'Pregunta2',
      component: () => import('../views/Pregunta2.vue')
    },
    {
      path: '/pregunta3',
      name: 'Pregunta3',
      component: () => import('../views/Pregunta3.vue')
    },
    {
      path: '/pregunta4',
      name: 'Pregunta4',
      component: () => import('../views/Pregunta4.vue')
    }
    ,
    {
      path: '/pregunta5',
      name: 'Pregunta5',
      component: () => import('../views/Pregunta5.vue')
    }
    ,
    {
      path: '/pregunta6',
      name: 'Pregunta6',
      component: () => import('../views/Pregunta6.vue')
    }
    ,
    {
      path: '/pregunta7',
      name: 'Pregunta7',
      component: () => import('../views/Pregunta7.vue')
    }
    ,
    {
      path: '/pregunta8',
      name: 'Pregunta8',
      component: () => import('../views/Pregunta8.vue')
    }
    ,
    {
      path: '/pregunta9',
      name: 'Pregunta9',
      component: () => import('../views/Pregunta9.vue')
    },
    {
      path: '/pregunta10',
      name: 'Pregunta10',
      component: () => import('../views/Pregunta10.vue')
    },
    {
      path: '/final',
      name: 'Final',
      component: () => import('../views/Final.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
