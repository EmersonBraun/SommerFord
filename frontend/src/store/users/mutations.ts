import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';
import { User } from 'src/pages/users';

const mutation: MutationTree<UserStateInterface> = {
  getAll (state: UserStateInterface, payload: User[]) {
    state.data = payload
  },
};

export default mutation;
