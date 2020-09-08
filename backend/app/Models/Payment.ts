import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Client from './Client'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public value: number

  @column()
  public date: Date

  @column()
  public client_id: number

  @column()
  public payment_status: string

  @hasOne(() => Client)
  public client: HasOne<typeof Client>
}
