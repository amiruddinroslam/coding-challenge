import { createRouter, createWebHistory } from 'vue-router'
import FirstAnswer from '../views/FirstAnswer.vue'
import SecondAnswer from '../views/SecondAnswer.vue'
import ThirdAnswer from '../views/ThirdAnswer.vue'

const routes = [
  {
    path: '/',
    redirect: '/answer-1'
  },
  {
    path: '/answer-1',
    name: 'FirstAnswer',
    component: FirstAnswer,
  },
  {
      path: '/answer-2',
      name: 'SecondAnswer',
      component: SecondAnswer,
  },
  {
      path: '/answer-3',
      name: 'ThirdAnswer',
      component: ThirdAnswer,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
