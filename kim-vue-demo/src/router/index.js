
import {
    // 引入 vue-router的两个函数
    createRouter,
    createWebHashHistory,
  } from 'vue-router'
  import home from '../pages/home.vue'
  import about from '../pages/about.vue'
  
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  