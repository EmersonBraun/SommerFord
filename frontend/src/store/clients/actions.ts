import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ClientStateInterface } from './state';

const actions: ActionTree<ClientStateInterface, StateInterface> = {
  getData (context, state: ClientStateInterface) {
    context.commit('getData', state)
  }, 
  create (context, state: ClientStateInterface) {
    context.commit('create', state)
  },
  update (context, state: ClientStateInterface) {
    context.commit('update', state)
  },
  remove (context, state: ClientStateInterface) {
    context.commit('remove', state)
  }
};

export default actions;
