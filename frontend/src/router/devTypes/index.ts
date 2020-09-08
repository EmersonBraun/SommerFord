export default [
  {
    path: '/dev-types',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/devTypes/Index.vue') },
      { path: 'create', component: () => import('pages/devTypes/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/devTypes/Form.vue') },
    ]
  }
]
