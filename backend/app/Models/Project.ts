import { BaseModel, column, HasOne, hasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Client from './Client'
import ProjectType from './ProjectType'
import DevType from './DevType'
import Modules from './Modules'

export default class Project extends BaseModel {
  @column()
  public id: string

  @column()
  public name: string

  @column()
  public client_id: number

  @column()
  public project_type: number

  @column()
  public dev_type_id: number

  @column()
  public visual_identity: boolean

  @column()
  public competitor: string

  @hasOne(() => Client)
  public client: HasOne<typeof Client>

  @hasOne(() => ProjectType)
  public projectType: HasOne<typeof ProjectType>

  @hasOne(() => DevType)
  public devType: HasOne<typeof DevType>

  @manyToMany(() => Modules, {
    pivotTable: 'projects_has_modules',
  })
  public modules: ManyToMany<typeof Modules>
}