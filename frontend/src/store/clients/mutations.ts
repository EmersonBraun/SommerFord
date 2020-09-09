import { MutationTree } from 'vuex';
import { ClientStateInterface } from './state';
import { Client } from 'src/pages/clients';

const mutation: MutationTree<ClientStateInterface> = {
  getAll (state: ClientStateInterface, payload: Client[]) {
    state.data = payload
  },
};

export default mutation;
