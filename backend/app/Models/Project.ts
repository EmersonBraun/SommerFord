import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Client from './Client'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public visual_identity: boolean

  @column()
  public competitor: string

  @column()
  public project_type: string

  @column()
  public dev_type: string

  @column()
  public client_id: number

  @column()
  public start_date: Date

  @column()
  public end_date: Date

  @hasOne(() => Client)
  public client: HasOne<typeof Client>
}
