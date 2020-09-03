import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ClientStateInterface } from './state';

const actions: ActionTree<ClientStateInterface, StateInterface> = {
  getAll (context, state: ClientStateInterface) {
    context.commit('getAll', state)
  }, 
  getOne (context, state: ClientStateInterface) {
    context.commit('getOne', state)
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
