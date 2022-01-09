
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Main.vue')
      },
      {
        path: '/main',
        component: () => import('pages/Main.vue')
      },
      {
        path: '/graphs',
        component: () => import('pages/Graphs.vue')
      },
      {
        path: '/list',
        component: () => import('pages/List.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/Settings.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
