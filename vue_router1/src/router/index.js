import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },

  {
    name: 'About',
    path: '/about',
    component: About
  },

  {
    name: 'Jobs',
    path: '/jobs',
    component: Jobs
  },

  {
    name: 'JobDetails',
    path: '/job/:id',
    component: JobDetails,
    props: true
  },

  // Redirects
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // Catch All 404
  {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
