import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PaymentStatusStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const paymentStatus: Module<PaymentStatusStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default paymentStatus;
