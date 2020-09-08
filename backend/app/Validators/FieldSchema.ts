import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const FieldSchema = schema.create({
  field_type: schema.string(),
  name: schema.string(),
  required: schema.boolean(),
  relationed: schema.boolean(),
  module_id: schema.number([
    rules.exists({ table: 'modules', column: 'id' }),
  ]),
})
