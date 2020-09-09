/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DevTypeStateInterface } from './state';

const getters: GetterTree<DevTypeStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
