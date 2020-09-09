import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { GroupStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Group: Module<GroupStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default Group;
