import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import OrderView from '../views/OrderView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AboutView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView
  },
  {
    path:'/user/:id/order',
    name: 'order',
    component: OrderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
