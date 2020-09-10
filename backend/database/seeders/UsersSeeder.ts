import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {name: 'Test', email: 'test@test.com', password: 'secret', is_admin: false},
      {name: 'Test admin', email: 'admin@admin.com', password: 'secret', is_admin: false},
    ])
    // await User.createMany([
    //   {name: 'Emerson Braun', email: 'emersonfbraun@gmail.com', password: 'secret', is_admin: true},
    //   {name: 'Luis Costa', email: 'luiscostalafc@gmail.com', password: 'secret', is_admin: true},
    // ])
  }
}
