import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column()
  public id: string

  @column()
  public name: string

  @column()
  public password: string

  @column()
  public is_admin: boolean

}