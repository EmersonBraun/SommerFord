import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Group from 'App/Models/Group'

export default class GroupSeeder extends BaseSeeder {
  public async run () {
    await Group.createMany([
      { group: 'DB Setup'},
      { group: 'DB Change'},
      { group: 'CREATE - api'},
      { group: 'CREATE - api/web'},
      { group: 'CREATE - api/web/mobile'},
      { group: 'CREATE - api/mobile'},
      { group: 'CREATE - web'},
      { group: 'CREATE - mobile'},

      { group: 'LIST - api'},
      { group: 'LIST - api/web'},
      { group: 'LIST - api/web/mobile'},
      { group: 'LIST - api/mobile'},
      { group: 'LIST - web'},
      { group: 'LIST - mobile'},

      { group: 'SHOW - api'},
      { group: 'SHOW - api/web'},
      { group: 'SHOW - api/web/mobile'},
      { group: 'SHOW - api/mobile'},
      { group: 'SHOW - web'},
      { group: 'SHOW - mobile'},

      { group: 'UPDATE - api'},
      { group: 'UPDATE - api/web'},
      { group: 'UPDATE - api/web/mobile'},
      { group: 'UPDATE - api/mobile'},
      { group: 'UPDATE - web'},
      { group: 'UPDATE - mobile'},

      { group: 'DELETE - api'},
      { group: 'DELETE - api/web'},
      { group: 'DELETE - api/web/mobile'},
      { group: 'DELETE - api/mobile'},
      { group: 'DELETE - web'},
      { group: 'DELETE - mobile'},

      { group: 'FILTER - api'},
      { group: 'FILTER - api/web'},
      { group: 'FILTER - api/web/mobile'},
      { group: 'FILTER - api/mobile'},
      { group: 'FILTER - web'},
      { group: 'FILTER - mobile'},

      { group: 'CRUD - api'},
      { group: 'CRUD - api/web'},
      { group: 'CRUD - api/web/mobile'},
      { group: 'CRUD - api/mobile'},
      { group: 'CRUD - web'},
      { group: 'CRUD - mobile'},
    ])
    // await GroupFactory.createMany(10)
  }
}
