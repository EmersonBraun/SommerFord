import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PhoneStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Phone: Module<PhoneStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default Phone;
