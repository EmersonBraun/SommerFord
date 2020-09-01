export default [
  {
    path: '/clients',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/clients/Index.vue') },
      { path: 'create', component: () => import('pages/clients/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/clients/Form.vue') },
    ]
  }
]
