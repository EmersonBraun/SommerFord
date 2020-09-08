import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import Client from './Client'

export default class Phone extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public phone: string

  @column()
  public whatsapp: boolean

  @column()
  public client_id: number

  @hasOne(() => Client)
  public client: HasOne<typeof Client>
}
