/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ModuleStateInterface } from './state';

const getters: GetterTree<ModuleStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
