import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DevType from 'App/Models/DevType'

export default class DevTypeSeeder extends BaseSeeder {
  public async run () {
    await DevType.createMany([
      { dev_type: 'Create something totally new'},
      { dev_type: 'Recreate based on something existing'},
      { dev_type: 'Maintenance'},
    ])
    // await DevTypeFactory.createMany(10)
  }
}
