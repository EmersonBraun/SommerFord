import { BaseModel, column, } from '@ioc:Adonis/Lucid/Orm'


export default class DevType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public dev_type: string

}