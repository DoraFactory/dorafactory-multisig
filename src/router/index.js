import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WalletCreationView from '../views/WalletCreationView.vue'
import CreateStep1 from '../views/CreateStep1.vue'
import CreateStep2 from '../views/CreateStep2.vue'
import CreateStep3 from '../views/CreateStep3.vue'
import AssetIndexView from '../views/asset/AssetIndexView.vue'
import AssetGlossaryView from '../views/asset/AssetGlossaryView.vue'
import TransactionsView  from '../views/asset/TransactionsView.vue'
import OwnersView  from '../views/asset/OwnersView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/asset',
      component: AssetIndexView,
      children: [
        {
          path: '',
          component: AssetGlossaryView,
        },
        {
          path: 'transactions',
          component: TransactionsView,
        },
        {
          path: 'owners',
          component: OwnersView,
        },
      ]
    },
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
          path: 'step1',
          component: CreateStep1,
        },
        {
          path: 'step2',
          component: CreateStep2,
        },
        {
          path: 'step3',
          component: CreateStep3,
        }
      ]
    },
  ]
})

// set default page title
const DEFAULT_TITLE = 'Substrate Multisig'
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router
