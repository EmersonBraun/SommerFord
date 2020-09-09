/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ClientStateInterface } from './state';
import { get, post, put, deleteData } from 'src/libs/api'
import { Client } from 'src/pages/clients';
const module = 'clients'

const actions: ActionTree<ClientStateInterface, StateInterface> = {
  async getAll (context) {
    const response = await get(`${module}`)
    context.commit('getAll', response)
  },
  async create (context, register: Client) {
    await post(`${module}`, register)
    const response = await get(`${module}`)
    context.commit('getAll', response)
  },
  async update (context, register: Client) {
    await put(`${module}/${register.id}`, register)
    const response = await get(`${module}`)
    context.commit('getAll', response)
  },
  async remove (context, id: number) {
    await deleteData(`${module}/${id}`)
    const response = await get(`${module}`)
    context.commit('getAll', response)
  }
};

export default actions;
