import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      header: Header,
      main: Home,
      footer: Footer
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
