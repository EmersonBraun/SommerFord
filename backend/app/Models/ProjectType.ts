import { BaseModel, column, } from '@ioc:Adonis/Lucid/Orm'


export default class ProjectType extends BaseModel {
  @column()
  public id: number

  @column()
  public project_type: string

}