import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class DevType extends BaseModel {
  @column()
  public id: string

  @column()
  public dev_type: string

}