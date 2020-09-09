import { MutationTree } from 'vuex';
import { RelationStateInterface } from './state';
import { Relation } from 'src/pages/relations';

const mutation: MutationTree<RelationStateInterface> = {
  getAll (state: RelationStateInterface, payload: Relation[]) {
    state.data = payload
  },
};

export default mutation;
