import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ManySchema = schema.create({
  model_name: schema.string(),
  table_name: schema.string(),
  pivot_table_name: schema.string(),
  origin: schema.string(),
  foreign: schema.string(),
  module_id: schema.number([
    rules.exists({ table: 'modules', column: 'id' }),
  ]),
})
