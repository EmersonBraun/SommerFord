/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ProjectStateInterface } from './state';

const getters: GetterTree<ProjectStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
