export default [
  {
    path: '/payment-statuses',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/paymentsStatus/Index.vue') },
      { path: 'create', component: () => import('pages/paymentsStatus/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/paymentsStatus/Form.vue') },
    ]
  }
]
