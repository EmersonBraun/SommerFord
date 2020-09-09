/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FieldStateInterface } from './state';

const getters: GetterTree<FieldStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
