/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete, findWhere } from '../Services/CRUD'
import Many from '../Models/Many'

class ManiesRepository {
  protected model: any

  constructor () {
    this.model = Many
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async moduleList (id) {
    return findWhere(this.model, 'module_id',id)
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

export default new ManiesRepository()
