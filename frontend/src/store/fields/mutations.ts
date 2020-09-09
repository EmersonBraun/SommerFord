import { MutationTree } from 'vuex';
import { FieldStateInterface } from './state';
import { Field } from 'src/pages/fields';

const mutation: MutationTree<FieldStateInterface> = {
  getAll (state: FieldStateInterface, payload: Field[]) {
    state.data = payload
  },
};

export default mutation;
