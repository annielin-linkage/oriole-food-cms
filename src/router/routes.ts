import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          { path: 'reprocessing', name: 'reprocessing', component: () => import('pages/Reprocessing.vue'), meta: { headerClass: 'bg-yellow-8' } },
          { path: 'delivery', name: 'delivery', component: () => import('pages/Delivery.vue'), meta: { headerClass: 'bg-blue-4' } },
        ]
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
];

export default routes;
