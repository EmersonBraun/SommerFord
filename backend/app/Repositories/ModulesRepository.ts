/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import {
  first,
  all,
  create,
  findAndUpdate,
  find,
  createOrUpdate,
  findAndDelete,
  count,
  sync,
  getRelated,
} from '../Services/CRUD'
import Module from '../Models/Module'
import { mountResponse } from 'App/Services/ResponseUtils'

class ModulesRepository {
  protected model: any

  constructor () {
    this.model = Module
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

  async project (id) {
    let data; let contentError = ''

    try{
      data = await this.model.query().where('project_id',id)
    } catch(error) {
      contentError = error
    }

    return mountResponse(data, contentError, 'found')
  }

  async servicesSync (id, ids: Object) {
    return await sync(this.model, id, 'service', ids)
  }

  async servicesGet (id) {
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

export default new ModulesRepository()
