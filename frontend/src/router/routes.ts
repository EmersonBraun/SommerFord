import { RouteConfig } from 'vue-router';

import auth from './auth'
import clients from './clients'
import devTypes from './devTypes'
import fields from './fields'
import groups from './groups'
import manies from './manies'
import modules from './modules'
import paymentStatus from './paymentStatus'
import payments from './payments'
import phones from './phones'
import project from './projects'
import projectTypes from './projectTypes'
import services from './services'
import users from './users'

const routes: RouteConfig[] = [
  ...auth,
  ...clients,
  ...devTypes,
  ...fields,
  ...groups,
  ...manies,
  ...modules,
  ...paymentStatus,
  ...payments,
  ...phones,
  ...project,
  ...projectTypes,
  ...services,
  ...users,
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
