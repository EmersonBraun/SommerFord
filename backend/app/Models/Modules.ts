import { BaseModel, column, HasOne, hasOne,manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Group from './Group'
import Project from './Project'

export default class Modules extends BaseModel {
  @column()
  public id: string

  @column()
  public name: string

  @column()
  public group_id: number

  @hasOne(() => Group)
  public group: HasOne<typeof Group>

  @manyToMany(() => Project, {
    pivotTable: 'projects_has_modules',
  })
  public project: ManyToMany<typeof Project>
}