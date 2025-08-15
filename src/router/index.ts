import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/pages/Home.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: () => import('@/pages/Blog.vue'),
      meta: { title: 'Blog' },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Yukiookii'
  next()
})

export default router
