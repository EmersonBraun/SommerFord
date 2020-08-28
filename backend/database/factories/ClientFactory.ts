import Factory from '@ioc:Adonis/Lucid/Factory'
import Client from 'App/Models/Client'

export const ClientFactory = Factory
  .define(Client, ({faker}) => ({
    id: faker.lorem.words(),
    name: faker.lorem.words(),
    email: faker.lorem.words(),
    role: faker.lorem.words(),
  }))
  .build()

export async function randomClientId () {
  const req = await Client.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
