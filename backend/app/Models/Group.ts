import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Service from './Service'
import Project from './Project'

export default class Group extends BaseModel {
  @column()
  public id: string

  @column()
  public group: string


  @manyToMany(() => Service, {
    pivotTable: 'groups_has_services',
  })
  public service: ManyToMany<typeof Service>

  @manyToMany(() => Project, {
    pivotTable: 'groups_has_projects',
  })
  public project: ManyToMany<typeof Project>
}