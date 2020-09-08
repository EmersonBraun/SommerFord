import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ClientStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const client: Module<ClientStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default client;
