import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ProjectTypeStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const projectType: Module<ProjectTypeStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default projectType;
