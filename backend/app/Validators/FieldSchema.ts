import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const FieldSchema = schema.create({
  field_type: schema.string(),
  name: schema.string(),
  required: schema.boolean(),
  relationed: schema.boolean(),
  relationed_name: schema.string.optional({},[
    rules.requiredWhen('relationed','=',true),
  ]),
  relationed_model_name: schema.string.optional({},[
    rules.requiredWhen('relationed','=',true),
  ]),
  relationed_table_name: schema.string.optional({},[
    rules.requiredWhen('relationed','=',true),
  ]),
  module_id: schema.number([
    rules.exists({ table: 'modules', column: 'id' }),
  ]),
})
