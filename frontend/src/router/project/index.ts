export default [
  {
    path: '/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/Index.vue') },
      { path: 'create', component: () => import('pages/projects/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/projects/Form.vue') },
    ]
  }
]
