import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/pages/auth.page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    }
  ]
})
