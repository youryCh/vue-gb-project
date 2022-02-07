import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/PageAbout')
    },
    {
      path: '/add/payment/:category*',
      name: 'addPayment',
      component: () => import('../components/PaymentForm')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../page/Page404')
    }
  ]
})

const titles = {
  dashboard: 'Welcome to Dashboard',
  about: 'About us',
  NotFound: 'Page not found!',
  addPayment: 'Add payment'
}

router.afterEach((to, from) => {
  document.title = titles[to.name]
})

export default router
