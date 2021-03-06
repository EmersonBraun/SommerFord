import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ModuleSchema = schema.create({
  name: schema.string(),
  model_name: schema.string(),
  route_name: schema.string(),
  project_id: schema.number([
    rules.exists({ table: 'projects', column: 'id' }),
  ]),
})
