import { MutationTree } from 'vuex';
import { ModuleStateInterface } from './state';
import { Module } from 'src/pages/modules';

const mutation: MutationTree<ModuleStateInterface> = {
  getAll (state: ModuleStateInterface, payload: Module[]) {
    state.data = payload
  },
};

export default mutation;
