import Vue from 'vue'
import Router from 'vue-router';

import Home from '../components/Home.vue';
import Profile from '../components/Profile.vue';
import Dashboard from '../components/Dashboard.vue';


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
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
});
