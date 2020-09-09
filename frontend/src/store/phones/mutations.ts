import { MutationTree } from 'vuex';
import { PhoneStateInterface } from './state';
import { Phone } from 'src/pages/phones';

const mutation: MutationTree<PhoneStateInterface> = {
  getAll (state: PhoneStateInterface, payload: Phone[]) {
    state.data = payload
  },
};

export default mutation;
