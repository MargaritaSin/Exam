import MainPage from '@/components/MainPage.vue';
import WhatReadPage from '@/components/WhatReadPage.vue';
import SearchResultsComponent from '@/components/SearchResultsComponent.vue';
import Genres from '@/components/GenresPage.vue';
import AuthorsPage from '@/components/AutorsPage.vue';
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
    },
    {
        path: '/search',
        name: 'SearchResults',
        component: SearchResultsComponent, // Компонент, отображающий результаты поиска
        props: (route) => ({ query: route.query.query }) // Передайте поисковый запрос в качестве prop
    },
    {
        path: '/genres',
        name: 'Genres',
        component: Genres,
    },
    {
        path: '/authors',
        name: 'AuthorsPage',
        component: AuthorsPage,
    },
  ]
});

export default router;
