export default [
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/users/Index.vue') },
      { path: 'create', component: () => import('pages/users/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/users/Form.vue') },
    ]
  }
]
