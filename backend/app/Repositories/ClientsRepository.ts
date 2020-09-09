/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete, count } from '../Services/CRUD'
import Client from '../Models/Client'

class ClientsRepository {
  protected model: any

  constructor () {
    this.model = Client
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async count () {
    return await count(this.model)
  }

  async find (id) {
    return await find(this.model, id)
  }

  async create (data: any) {
    return await create(this.model, data)
  }

  async createOrUpdate (id: any, data: any) {
    return await createOrUpdate(this.model, id, data)
  }

  async findAndUpdate (id: any, data: any) {
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.model, id)
  }
}

export default new ClientsRepository()
