import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Cart = () => import('../views/Cart')
const Home = () => import('../views/Home')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path:'*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
