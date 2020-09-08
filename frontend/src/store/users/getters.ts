import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ClientStateInterface } from './state';

const getters: GetterTree<ClientStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
