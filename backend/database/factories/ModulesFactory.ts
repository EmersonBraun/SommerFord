import Factory from '@ioc:Adonis/Lucid/Factory'
import Modules from 'App/Models/Modules'
import { randomGroupId } from './GroupFactory'

export const ModulesFactory = Factory
  .define(Modules, async ({faker}) => ({
    name: faker.lorem.words(),
    group_id: await randomGroupId(),
  }))
  .build()

export async function randomModulesId () {
  const req = await Modules.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
