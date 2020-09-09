import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ServiceStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Service: Module<ServiceStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default Service;
