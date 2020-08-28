import { BaseModel, columnmanyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Phone from './Phone'import Payment from './Payment'

export default class Client extends BaseModel {
  @column()
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public role: string


  @manyToMany(() => Phone, {
    pivotTable: 'clients_has_phones',
  })
  public phone: ManyToMany<typeof Phone>

  @manyToMany(() => Payment, {
    pivotTable: 'clients_has_payments',
  })
  public payment: ManyToMany<typeof Payment>
}