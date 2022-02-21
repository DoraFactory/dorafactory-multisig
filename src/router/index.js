import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WalletCreationView from '../views/WalletCreationView.vue'
import CreateStep1 from '../components/steps/CreateStep1.vue'
import CreateStep2 from '../components/steps/CreateStep2.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-wallet',
      component: WalletCreationView,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          component: CreateStep1,
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'step1',
          component: CreateStep1,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'step2',
          component: CreateStep2,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// set default page title
const DEFAULT_TITLE = 'Substrate Multisig'
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router
