export default [
  {
    path: '/projectTypes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projectTypes/Index.vue') },
      { path: 'create', component: () => import('pages/projectTypes/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/projectTypes/Form.vue') },
    ]
  }
]
