import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ModulesFactory } from '../factories/ModulesFactory'

export default class ModulesSeeder extends BaseSeeder {
  public async run () {
    await ModulesFactory.createMany(10)
  }
}
