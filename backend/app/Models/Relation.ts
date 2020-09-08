import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Field from './Field'

export default class Relation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public model_name: string

  @column()
  public table_name: string

  @column()
  public field_id: number

  @column()
  public field_type: string

  @hasOne(() => Field)
  public field: HasOne<typeof Field>
}
