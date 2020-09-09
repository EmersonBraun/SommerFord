import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { DevTypeStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const devType: Module<DevTypeStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default devType;
