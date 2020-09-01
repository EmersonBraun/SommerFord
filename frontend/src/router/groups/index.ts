export default [
  {
    path: '/groups',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/groups/Index.vue') },
      { path: 'create', component: () => import('pages/groups/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/groups/Form.vue') },
    ]
  }
]
