import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class PaymentStatus extends BaseModel {
  @column()
  public id: string

  @column()
  public payment_status: string

}