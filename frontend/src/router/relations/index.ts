export default [
  {
    path: '/relations',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/relations/Index.vue') },
      { path: 'create', component: () => import('pages/relations/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/relations/Form.vue') },
    ]
  }
]
