import { BaseModel, column, HasOne, hasOne,manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Client from './Client'import Project from './Project'import DevType from './DevType'
import Modules from './Modules'

export default class Project extends BaseModel {
  @column()
  public id: string

  @column()
  public name: string

  @column()
  public client_id: string

  @column()
  public project_type: string

  @column()
  public dev_type_id: string

  @column()
  public id: string

  @column()
  public competitor: string


  @hasOne(() => Client)
  public client: HasOne<typeof Client>

  @hasOne(() => Project)
  public project: HasOne<typeof Project>

  @hasOne(() => DevType)
  public devType: HasOne<typeof DevType>

  @manyToMany(() => Modules, {
    pivotTable: 'projects_has_modules',
  })
  public modules: ManyToMany<typeof Modules>
}