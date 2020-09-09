import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { FieldStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Field: Module<FieldStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default Field;
