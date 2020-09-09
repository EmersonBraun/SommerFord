import { MutationTree } from 'vuex';
import { ProjectStateInterface } from './state';
import { Project } from 'src/pages/projects';

const mutation: MutationTree<ProjectStateInterface> = {
  getAll (state: ProjectStateInterface, payload: Project[]) {
    state.data = payload
  },
};

export default mutation;
