import Factory from '@ioc:Adonis/Lucid/Factory'
import Relation from 'App/Models/Relation'
import { randomFieldId } from './FieldFactory'

export const RelationFactory = Factory
  .define(Relation, async ({faker}) => ({
    name: faker.lorem.words(3),
    model_name: faker.lorem.words(3),
    table_name: faker.lorem.words(3),
    field_type: faker.lorem.words(3),
    field_id: await randomFieldId(),
  }))
  .build()

export async function randomRelationId () {
  const req = await Relation.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
