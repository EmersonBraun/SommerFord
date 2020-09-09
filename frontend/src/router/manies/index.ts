export default [
  {
    path: '/manies',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/manies/Index.vue') },
      { path: 'create', component: () => import('pages/manies/Form.vue') },
      { path: 'edit/:id', component: () => import('pages/manies/Form.vue') },
    ]
  }
]
