import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {requiresAuth: true}
  },
    {
      path: '/iniciarSesion',
      name: 'IniciarSesion',
      component: () => import('../views/IniciarSesion.vue')
    },
    {
      path: '/registro',
      name: 'Registro',
      component: () => import('../views/Registro.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = {
    usuarioID: localStorage.getItem('usuarioID') || null,
    tipo: localStorage.getItem('tipo') || null
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (user.usuarioID !==null && user.tipo !==null) {
      next()
    } else {
      next({name: 'IniciarSesion'})
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
