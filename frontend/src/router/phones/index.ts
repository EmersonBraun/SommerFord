export default [
  {
    path: '/phones',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/phones/Index.vue') },
      { path: 'create', component: () => import('pages/phones/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/phones/Form.vue') },
    ]
  }
]
