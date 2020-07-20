import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/views/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  routes
})

export default router
