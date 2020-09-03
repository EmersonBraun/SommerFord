import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Group from './Group'

export default class Service extends BaseModel {
  @column()
  public id: string

  @column()
  public service: string

  @column()
  public hour_needed: string

  @manyToMany(() => Group, {
    pivotTable: 'groups_has_services',
  })
  public group: ManyToMany<typeof Group>
}