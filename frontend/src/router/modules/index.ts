export default [
  {
    path: '/modules',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/modules/Index.vue') },
      { path: 'create', component: () => import('pages/modules/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/modules/Form.vue') },
    ]
  }
]
