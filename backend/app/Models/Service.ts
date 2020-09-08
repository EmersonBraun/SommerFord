import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Group from './Group'
import Module from './Module'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public service: string

  @column()
  public hour_needed: number

  @manyToMany(() => Group, {
    pivotTable: 'groups_has_services',
  })
  public group: ManyToMany<typeof Group>

  @manyToMany(() => Module, {
    pivotTable: 'modules_has_services',
  })
  public module: ManyToMany<typeof Module>
}
