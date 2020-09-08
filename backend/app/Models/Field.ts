import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Module from './Module'

export default class Field extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public module_id: number

  @column()
  public field_type: string

  @column()
  public name: string

  @column()
  public required: boolean

  @column()
  public relationed: boolean

  @hasOne(() => Module)
  public module: HasOne<typeof Module>
}
