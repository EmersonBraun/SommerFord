import Factory from '@ioc:Adonis/Lucid/Factory'
import Many from 'App/Models/Many'
import { randomModuleId } from './ModuleFactory'

export const ManyFactory = Factory
  .define(Many, async ({faker}) => ({
    model_name: faker.lorem.words(3),
    table_name: faker.lorem.words(3),
    pivot_table_name: faker.lorem.words(3),
    origin: faker.lorem.words(3),
    foreign: faker.lorem.words(3),
    module_id: await randomModuleId(),
  }))
  .build()

export async function randomManyId () {
  const req = await Many.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
