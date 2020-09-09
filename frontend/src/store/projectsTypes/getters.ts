/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ProjectTypeStateInterface } from './state';

const getters: GetterTree<ProjectTypeStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
