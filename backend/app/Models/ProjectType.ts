import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Group from './Group'

export default class ProjectType extends BaseModel {
  @column()
  public id: string

  @column()
  public project_type: string

  @manyToMany(() => Group, {
    pivotTable: 'groups_has_projects',
  })
  public group: ManyToMany<typeof Group>
}
