import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import ShowDetail from '../views/ShowDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/show/:id',
    name: 'ShowDetail',
    component: ShowDetail,
    props: true
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
