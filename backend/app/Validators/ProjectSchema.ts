import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProjectSchema = schema.create({
  name: schema.string(),
  visual_identity: schema.boolean(),
  project_type: schema.string(),
  dev_type: schema.string(),
  client_id: schema.number([
    rules.exists({ table: 'clients', column: 'id' }),
  ]),
})
