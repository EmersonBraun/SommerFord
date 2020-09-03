import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export const UserFactory = Factory
  .define(User, ({faker}) => ({
    name: faker.lorem.words(),
    password: faker.lorem.words(),
    is_admin: faker.random.boolean(),
  }))
  .build()

export async function randomUserId () {
  const req = await User.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
