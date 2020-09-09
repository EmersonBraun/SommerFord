/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { GroupStateInterface } from './state';
import { get, post, put, deleteData } from 'src/libs/api'
const module = 'groups'

const actions: ActionTree<GroupStateInterface, StateInterface> = {
  async getAll (context) {
    const response = await get(`${module}`)
    context.commit('getAll', response)
  },
  async create (context, register: Record<string, unknown>) {
    await post(`${module}`, register)
    const response = await get(`${module}`)
    context.commit('getAll', response)
  },
  async update (context, register: Record<string, unknown>) {
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
