import Factory from '@ioc:Adonis/Lucid/Factory'
import Group from 'App/Models/Group'

export const GroupFactory = Factory
  .define(Group, ({faker}) => ({
    group: faker.lorem.words(),
  }))
  .build()

export async function randomGroupId () {
  const req = await Group.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
