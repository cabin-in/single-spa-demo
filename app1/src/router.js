import Router from 'vue-router'
import Home from './views/Home.vue'
import test from './views/test.vue'
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app1',
      name: 'home',
      component: Home
    },
    {
      path: '/app1/test',
      name: 'test',
      component: test
    },
  ]
})
