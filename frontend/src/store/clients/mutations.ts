import { MutationTree } from 'vuex';
import { ClientStateInterface } from './state';
import { Client } from 'src/pages/clients';

const mutation: MutationTree<ClientStateInterface> = {
  async getAll (state: ClientStateInterface, payload) {
    state.data = payload
  },
};

export default mutation;
