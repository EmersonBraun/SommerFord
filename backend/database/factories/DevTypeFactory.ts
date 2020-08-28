import Factory from '@ioc:Adonis/Lucid/Factory'
import DevType from 'App/Models/DevType'

export const DevTypeFactory = Factory
  .define(DevType, ({faker}) => ({
    id: faker.lorem.words(),
    dev_type: faker.lorem.words(),
  }))
  .build()

export async function randomDevTypeId () {
  const req = await DevType.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
