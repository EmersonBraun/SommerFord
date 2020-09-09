/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { RelationStateInterface } from './state';

const getters: GetterTree<RelationStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
