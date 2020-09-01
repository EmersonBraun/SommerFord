export default [
  {
    path: '/payments',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/payments/Index.vue') },
      { path: 'create', component: () => import('pages/payments/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/payments/Form.vue') },
    ]
  }
]
