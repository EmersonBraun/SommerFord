import Factory from '@ioc:Adonis/Lucid/Factory'
import Service from 'App/Models/Service'

export const ServiceFactory = Factory
  .define(Service, ({faker}) => ({
    service: faker.lorem.words(),
    hour_needed: faker.lorem.words(),
  }))
  .build()

export async function randomServiceId () {
  const req = await Service.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
