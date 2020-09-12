/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete, count } from '../Services/CRUD'
import Project from '../Models/Project'
import { mountResponse } from 'App/Services/ResponseUtils'

class ProjectsRepository {
  protected model: any

  constructor () {
    this.model = Project
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async complete (id) {
    let data; let contentError = ''

    try{
      data = await Project.query().preload('modules', (query) => {
        query.preload('service')
      }).where('id', id).first()
    } catch(error) {
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
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

export default new ProjectsRepository()
