import { getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import nopage from '../views/nopage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/StudentDetails.vue')
    },
    {
      path: '/tableview',
      name: 'table',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/addfile',
      name: 'addfile',
      meta: {
        requiresAuth: false
      },
      component: () => import('../views/AddFilePage.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      // meta: {
      //   requiresAuth: false
      // },
      component: () => import('../views/LandingPage.vue')
    },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: nopage
   }
  ]
})


// chec for auth state changes
// onAuthStateChanged(user => {
//   if (user) {
//     router.push('/table')
//   } else {
//     router.push('/login')
//   }
// })
// rout guard
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   const isAuthenticated = getAuth().currentUser
//   if (requiresAuth && !isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
