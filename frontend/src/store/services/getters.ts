/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ServiceStateInterface } from './state';

const getters: GetterTree<ServiceStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
