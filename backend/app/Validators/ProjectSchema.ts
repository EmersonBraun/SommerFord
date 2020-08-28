import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProjectSchema = schema.create({
  id: schema.increments(),
  name: schema.string(),
  client_id: schema.integer(),
  project_type: schema.integer(),
  dev_type_id: schema.integer(),
  id: schema.boolean(),
  competitor: schema.string(),
  client_id: schema.integer([
    rules.exists({ table: 'clients', column: 'id' }),
  ]),
  project_type: schema.integer([
    rules.exists({ table: 'project_types', column: 'id' }),
  ]),
  dev_type_id: schema.integer([
    rules.exists({ table: 'dev_types', column: 'id' }),
  ]),
})