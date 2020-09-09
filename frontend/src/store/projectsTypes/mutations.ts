import { MutationTree } from 'vuex';
import { ProjectTypeStateInterface } from './state';
import { ProjectType } from 'src/pages/projectTypes';

const mutation: MutationTree<ProjectTypeStateInterface> = {
  getAll (state: ProjectTypeStateInterface, payload: ProjectType[]) {
    state.data = payload
  },
};

export default mutation;
