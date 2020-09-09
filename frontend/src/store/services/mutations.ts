import { MutationTree } from 'vuex';
import { ServiceStateInterface } from './state';
import { Service } from 'src/pages/services';

const mutation: MutationTree<ServiceStateInterface> = {
  getAll (state: ServiceStateInterface, payload: Service[]) {
    state.data = payload
  },
};

export default mutation;
