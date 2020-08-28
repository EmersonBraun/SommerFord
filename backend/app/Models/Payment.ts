import { BaseModel, column, HasOne, hasOne, } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import PaymentStatus from './PaymentStatus'

export default class Payment extends BaseModel {
  @column()
  public id: string

  @column()
  public value: string

  @column()
  public date: string

  @column()
  public payment_status_id: string


  @hasOne(() => PaymentStatus)
  public paymentStatus: HasOne<typeof PaymentStatus>
}