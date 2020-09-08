import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PaymentStatus extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public payment_status: string
}
