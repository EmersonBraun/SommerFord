import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ModuleStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Module: Module<ModuleStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default Module;
