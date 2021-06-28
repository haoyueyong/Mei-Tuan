import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Zhuce from "../views/Zhuce.vue"
import City from "../views/City.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/zhuce',
    name: 'Zhuce',
    component: Zhuce
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },

]

const router = new VueRouter({
  routes
})

export default router
