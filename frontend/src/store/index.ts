import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import client from './clients';
import devType from './devTypes';
import field from './fields';
import group from './groups';
import many from './manies';
import module from './modules';
import payment from './payments';
import paymentStatus from './paymentsStatuses';
import phone from './phones';
import project from './projects';
import projectType from './projectsTypes';
import service from './services';
import user from './users';

import { ClientStateInterface } from './clients/state';
import { DevTypeStateInterface } from './devTypes/state';
import { FieldStateInterface } from './fields/state';
import { GroupStateInterface } from './groups/state';
import { ManyStateInterface } from './manies/state';
import { ModuleStateInterface } from './modules/state';
import { PaymentStateInterface } from './payments/state';
import { PaymentStatusStateInterface } from './paymentsStatuses/state';
import { PhoneStateInterface } from './phones/state';
import { ProjectStateInterface } from './projects/state';
import { ProjectTypeStateInterface } from './projectsTypes/state';
import { ServiceStateInterface } from './services/state';
import { UserStateInterface } from './users/state';


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  clients: ClientStateInterface;
  devTypes: DevTypeStateInterface;
  fields: FieldStateInterface;
  groups: GroupStateInterface;
  manies: ManyStateInterface;
  modules: ModuleStateInterface;
  payments: PaymentStateInterface;
  paymentsStatuses: PaymentStatusStateInterface;
  phones: PhoneStateInterface;
  projects: ProjectStateInterface;
  projectsTypes: ProjectTypeStateInterface;
  services: ServiceStateInterface;
  users: UserStateInterface;

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
      paymentStatus,
      phone,
      project,
      projectType,
      service,
      user,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
