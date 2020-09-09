import { MutationTree } from 'vuex';
import { GroupStateInterface } from './state';
import { Group } from 'src/pages/groups';

const mutation: MutationTree<GroupStateInterface> = {
  getAll (state: GroupStateInterface, payload: Group[]) {
    state.data = payload
  },
};

export default mutation;
