import { MutationTree } from 'vuex';
import { ManyStateInterface } from './state';
import { Many } from 'src/pages/manies';

const mutation: MutationTree<ManyStateInterface> = {
  getAll (state: ManyStateInterface, payload: Many[]) {
    state.data = payload
  },
};

export default mutation;
