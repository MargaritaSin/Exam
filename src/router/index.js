import MainPage from '@/components/MainPage.vue';
import WhatReadPage from '@/components/WhatReadPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router =  createRouter({
history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/what-read',
      name: 'WhatReadPage',
      component: WhatReadPage
    }
  ]
});

export default router;
