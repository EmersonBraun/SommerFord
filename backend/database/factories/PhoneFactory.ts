import Factory from '@ioc:Adonis/Lucid/Factory'
import Phone from 'App/Models/Phone'

export const PhoneFactory = Factory
  .define(Phone, ({faker}) => ({
    id: faker.lorem.words(),
    phone: faker.lorem.words(),
    whatsapp: faker.lorem.words(),
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
