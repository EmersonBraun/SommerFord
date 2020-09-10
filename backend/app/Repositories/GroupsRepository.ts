/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete, sync, getRelated } from '../Services/CRUD'
import Group from '../Models/Group'

class GroupsRepository {
  protected model: any

  constructor () {
    this.model = Group
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async services (id, data) {
    return await sync(this.model, id, 'service', data)
  }

  async servicesIds (id) {
    return await getRelated(this.model, id, 'service')
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

export default new GroupsRepository()
