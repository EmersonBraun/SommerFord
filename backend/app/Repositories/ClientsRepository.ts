/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { first, all, create, findAndUpdate, createOrUpdate, findAndDelete } from '../Services/CRUD'
import { getHappen, getMessage } from '../Services/ResponseUtils'
import Client from 'App/Models/Client'

let data = []
let statusCode = 400
let message = ''
let returnType = 'error'
let contentError = []

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

  async find (id: any) {
    try{
      data = await this.model
        .query()
        .where('id', id)
        .preload('phones')
        .preload('payments')
    } catch(error) {
      console.log(error)
      contentError = error
    }

    statusCode = data ? 200 : 404
    returnType = getHappen(statusCode)
    message = getMessage('found', statusCode)

    return { data:data[0] || {}, statusCode, returnType, message, contentError }
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
