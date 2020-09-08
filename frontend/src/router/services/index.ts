export default [
  {
    path: '/services',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/services/Index.vue') },
      { path: 'create', component: () => import('pages/services/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/services/Form.vue') },
    ]
  }
]
