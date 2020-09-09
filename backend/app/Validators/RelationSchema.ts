import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const RelationSchema = schema.create({
  name: schema.string(),
  model_name: schema.string(),
  table_name: schema.string(),
  field_type: schema.string(),
  field_id: schema.number([
    rules.exists({ table: 'fields', column: 'id' }),
  ]),
})
