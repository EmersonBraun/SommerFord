/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ManyStateInterface } from './state';

const getters: GetterTree<ManyStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
