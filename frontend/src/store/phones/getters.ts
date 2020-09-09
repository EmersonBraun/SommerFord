/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PhoneStateInterface } from './state';

const getters: GetterTree<PhoneStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
