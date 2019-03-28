import Vue from 'vue'
import Router from 'vue-router'
import AuthPage from '@/views/Auth.vue'
import CreateRequestPage from '@/views/Request.vue'
import UserLayout from '@/views/app/Layout.vue'
import ErrorPage from '@/views/Error.vue'
import Profile from '@/views/Profile.vue'

// import AuthDemo from '@/components/auth/Auth.vue'

import { mustBeSignIn } from '@/guard/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
      // component: AuthDemo
    },

    {
      path: '/app',
      component: UserLayout,
      // component: () => import(/* layzy load, chunk support */ '@/views/app/Layout.vue'),
      beforeEnter: mustBeSignIn,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/app/Dashboard.vue')
        },
        {
          path: 'add-request',
          name: 'request',
          component: CreateRequestPage
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '**',
      component: ErrorPage
    }
  ]
})
