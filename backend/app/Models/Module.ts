import { BaseModel, column, manyToMany, ManyToMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Project from './Project'
import Service from './Service'
// import Field from './Field'

export default class Module extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public projectId: number

  @column()
  public name: string

  @column()
  public small_title: string

  @column()
  public model_name: string

  @column()
  public route_name: string

  @column()
  public start_date: Date

  @column()
  public end_date: Date

  @belongsTo(() => Project)
  public project: BelongsTo<typeof Project>

  // @hasOne(() => Field)
  // public fieldId: HasOne<typeof Field>

  @manyToMany(() => Service, {
    pivotTable: 'modules_has_services',
  })
  public service: ManyToMany<typeof Service>
}
