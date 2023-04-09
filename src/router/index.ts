import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SearchResult from '../views/SearchResult.vue'
import ShowDetail from '../views/ShowDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: 'Dashboard' }
  },
  {
    path: '/search',
    name: 'SearchResult',
    component: SearchResult,
    meta: { title: 'Search' }
  },
  {
    path: '/show/:id',
    name: 'ShowDetail',
    component: ShowDetail,
    props: true,
    meta: { title: 'Show' }
  },
  {
    path: '/:catchAll(.*)', // catch-all route for 404 pages
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Page Not Found' }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
