import { MutationTree } from 'vuex';
import { DevTypeStateInterface } from './state';
import { DevType } from 'src/pages/devTypes';

const mutation: MutationTree<DevTypeStateInterface> = {
  getAll (state: DevTypeStateInterface, payload: DevType[]) {
    state.data = payload
  },
};

export default mutation;
