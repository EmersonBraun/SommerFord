import { MutationTree } from 'vuex';
import { ClientStateInterface } from './state';
import { Client } from 'src/pages/clients';
import { get, post, put, deleteData } from 'src/libs/api'
const module = 'clients'

const mutation: MutationTree<ClientStateInterface> = {
  async getAll (state: ClientStateInterface) {
    const response = await get(`${module}`)
    state.data = response
  }, 
  async getOne (state: ClientStateInterface, id: number) {
    const response = await get(`${module}/${id}`)
    state.register = response
  }, 
  async create (state: ClientStateInterface, payload: Client) {
    await post(`${module}`, payload)
  },
  async update (state: ClientStateInterface, payload: Client) {
    await put(`${module}/${payload.id}`, payload)
  },
  async remove (state: ClientStateInterface, id: number) {
    await deleteData(`${module}/${id}`)
  },
};

export default mutation;
