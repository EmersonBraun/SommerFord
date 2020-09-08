export default [
  {
    path: '/fields',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/fields/Index.vue') },
      { path: 'create', component: () => import('pages/fields/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/fields/Form.vue') },
    ]
  }
]
