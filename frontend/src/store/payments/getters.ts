/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PaymentStateInterface } from './state';

const getters: GetterTree<PaymentStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
