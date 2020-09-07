import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProjectSchema = schema.create({
  name: schema.string(),
  visual_identity: schema.boolean(),
  competitor: schema.string(),
  client_id: schema.number([
    rules.exists({ table: 'clients', column: 'id' }),
  ]),
  project_type: schema.number([
    rules.exists({ table: 'project_types', column: 'id' }),
  ]),
  dev_type_id: schema.number([
    rules.exists({ table: 'dev_types', column: 'id' }),
  ]),
})
