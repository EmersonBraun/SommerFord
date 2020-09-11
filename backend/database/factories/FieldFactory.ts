import Factory from '@ioc:Adonis/Lucid/Factory'
import Field from 'App/Models/Field'
import { randomModuleId } from './ModuleFactory'

export const FieldFactory = Factory
  .define(Field, async ({faker}) => ({
    field_type: faker.lorem.words(3),
    name: faker.lorem.words(3),
    required: faker.random.boolean(),
    relationed: faker.random.boolean(),
    relationed_name: faker.lorem.words(3),
    relationed_model_name: faker.lorem.words(3),
    relationed_table_name: faker.lorem.words(3),
    module_id: await randomModuleId(),
  }))
  .build()

export async function randomFieldId () {
  const req = await Field.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
