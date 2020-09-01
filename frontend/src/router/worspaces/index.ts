export default [
  {
    path: '/workspaces',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/workspaces/Index.vue') },
      { path: 'create', component: () => import('pages/workspaces/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/workspaces/Form.vue') },
    ]
  }
]
