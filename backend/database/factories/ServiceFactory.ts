import Factory from '@ioc:Adonis/Lucid/Factory'
import Service from 'App/Models/Service'

export const ServiceFactory = Factory
  .define(Service, ({faker}) => ({
    scope: faker.random.arrayElement(['backend', 'frontend', 'mobile']),
    service: faker.lorem.words(3),
    hour_needed: faker.random.number({min:1, max:10}),
  }))
  .build()

export async function randomServiceId () {
  const req = await Service.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
