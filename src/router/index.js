import Vue from 'vue'
import VueRouter from 'vue-router'
const register = ()=>import('@/views/register.vue')
Vue.use(VueRouter)
  const routes = [
     {
       path:'/register',
       component:register
     }
  ]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
