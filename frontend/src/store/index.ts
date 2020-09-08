import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import client from './clients';
import devType from './devTypes';
import field from './fields';
import group from './groups';
import many from './manies';
import module from './modules';
import payment from './payments';
import paymentsStatus from './paymentsStatuses';
import phone from './phones';
import project from './projects';
import projectsType from './projectsTypes';
import relation from './relations';
import service from './services';
import user from './users';

import { ClientsStateInterface } from './clients/state';
import { DevTypesStateInterface } from './devTypes/state';
import { FieldsStateInterface } from './fields/state';
import { GroupsStateInterface } from './groups/state';
import { ManiesStateInterface } from './manies/state';
import { ModulesStateInterface } from './modules/state';
import { PaymentsStateInterface } from './payments/state';
import { PaymentsStatusesStateInterface } from './paymentsStatuses/state';
import { PhonesStateInterface } from './phones/state';
import { ProjectsStateInterface } from './projects/state';
import { ProjectsTypesStateInterface } from './projectsTypes/state';
import { RelationsStateInterface } from './relations/state';
import { ServicesStateInterface } from './services/state';
import { UsersStateInterface } from './users/state';


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  clients: ClientsStateInterface;
  devTypes: DevTypesStateInterface;
  fields: FieldsStateInterface;
  groups: GroupsStateInterface;
  manies: ManiesStateInterface;
  modules: ModulesStateInterface;
  payments: PaymentsStateInterface;
  paymentsStatuses: PaymentsStatusesStateInterface;
  phones: PhonesStateInterface;
  projects: ProjectsStateInterface;
  projectsTypes: ProjectsTypesStateInterface;
  relations: RelationsStateInterface;
  services: ServicesStateInterface;
  users: UsersStateInterface;

  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: unknown;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      client,
      devType,
      field,
      group,
      many,
      module,
      payment,
      paymentsStatus,
      phone,
      project,
      projectsType,
      relation,
      service,
      user,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
