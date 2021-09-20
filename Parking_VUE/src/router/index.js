import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Equipo.vue')
    },
    {
      path: '/event/:id',
      name: 'eventSingle',
      component: () => import('../views/EventSingle.vue')
    },
    {
      path: '/login',
      name: 'loginForm',
      component: () => import('../views/LoginForm.vue')
    },
    {
      path: '/register',
      name: 'registerForm',
      component: () => import('../views/RegisterForm.vue')
    },
    {
      path: '/editC',
      name: 'editClientForm',
      component: () => import('../views/EditClientForm.vue')
    },
    {
      path: '/editP',
      name: 'editParkForm',
      component: () => import('../views/EditParkForm.vue')
    },
    {
      path: '/acc',
      name: 'acc',
      component: () => import('../views/EventSingle.vue'),
      beforeEnter: authGuard
    }
  ]
})
