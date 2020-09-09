import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PaymentStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Payment: Module<PaymentStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default Payment;
