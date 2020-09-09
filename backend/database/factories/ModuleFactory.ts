import Factory from '@ioc:Adonis/Lucid/Factory'
import Module from 'App/Models/Module'
import { randomProjectId } from './ProjectFactory'

export const ModuleFactory = Factory
  .define(Module, async ({faker}) => ({
    name: faker.lorem.words(3),
    small_title: faker.lorem.words(3),
    model_name: faker.lorem.words(3),
    route_name: faker.lorem.words(3),
    project_id: await randomProjectId(),
    start_date: faker.date.future(2),
    end_date: faker.date.future(2),
  }))
  .build()

export async function randomModuleId () {
  const req = await Module.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
