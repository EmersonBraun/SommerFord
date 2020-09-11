import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProjectTypeFactory } from 'Database/factories/ProjectTypeFactory'

export default class ProjectSeeder extends BaseSeeder {
  public async run () {
    await ProjectTypeFactory.createMany(10)
  }
}
