import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Service from './Service'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public group: string

  @manyToMany(() => Service, {
    pivotTable: 'groups_has_services',
  })
  public service: ManyToMany<typeof Service>
}
