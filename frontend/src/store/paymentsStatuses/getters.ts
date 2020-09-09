/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PaymentStatusStateInterface } from './state';

const getters: GetterTree<PaymentStatusStateInterface, StateInterface> = {
  getAll (context) {
    return context.data
  }
};

export default getters;
