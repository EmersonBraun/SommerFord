import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Module from './Module'

export default class Many extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public module_id: number

  @column()
  public model_name: string

  @column()
  public table_name: string

  @column()
  public pivot_table_name: string

  @column()
  public origin: string

  @column()
  public foreign: string

  @hasOne(() => Module)
  public module: HasOne<typeof Module>
}
