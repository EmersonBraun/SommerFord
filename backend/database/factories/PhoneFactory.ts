import Factory from '@ioc:Adonis/Lucid/Factory'
import Phone from 'App/Models/Phone'
import { randomClientId } from './ClientFactory'

export const PhoneFactory = Factory
  .define(Phone, async ({faker}) => ({
    phone: faker.lorem.words(3),
    whatsapp: faker.random.boolean(),
    client_id: await randomClientId(),
  }))
  .build()

export async function randomPhoneId () {
  const req = await Phone.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
