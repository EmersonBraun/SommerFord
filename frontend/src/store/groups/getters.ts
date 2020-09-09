/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { GroupStateInterface } from './state';

const getters: GetterTree<GroupStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
