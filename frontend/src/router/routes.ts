import { RouteConfig } from 'vue-router';

import auth from './auth'
import clients from './clients'
import groups from './groups'
import modules from './modules'
import paymentStatus from './paymentStatus'
import payments from './payments'
import phones from './phones'
import project from './project'
import projectTypes from './projectTypes'
import users from './users'
import worspaces from './worspaces'

const routes: RouteConfig[] = [
  ...auth,
  ...clients,
  ...groups,
  ...modules,
  ...paymentStatus,
  ...payments,
  ...phones,
  ...project,
  ...projectTypes,
  ...users,
  ...worspaces,
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
