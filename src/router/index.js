import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import OrderView from '../views/OrderView.vue'
import RegisterMenuView from '../views/RegisterMenuView.vue'
import MenuView from '../views/MenuView.vue'
import PurchaseView from '../views/PurchaseView.vue'

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
    path: '/menuadd',
    name: 'menu',
    component: RegisterMenuView
  },
  {
    path: '/menu',
    name: 'catalog',
    component: MenuView
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
  },
  {
    path:'/user/:id/order/:almid/:selected',
    name: 'purchase',
    component: PurchaseView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
