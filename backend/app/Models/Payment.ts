import { BaseModel, column, HasOne, hasOne, } from '@ioc:Adonis/Lucid/Orm'
// import { DateTime } from 'luxon'
import PaymentStatus from './PaymentStatus'

export default class Payment extends BaseModel {
  @column()
  public id: number

  @column()
  public value: number

  @column()
  public date: Date

  @column()
  public payment_status_id: number

  @hasOne(() => PaymentStatus)
  public paymentStatus: HasOne<typeof PaymentStatus>
}