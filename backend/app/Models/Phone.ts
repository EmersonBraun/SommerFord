import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Client from './Client'

export default class Phone extends BaseModel {
  @column()
  public id: string

  @column()
  public phone: string

  @column()
  public whatsapp: string

  @manyToMany(() => Client, {
    pivotTable: 'clients_has_phones',
  })
  public client: ManyToMany<typeof Client>
}