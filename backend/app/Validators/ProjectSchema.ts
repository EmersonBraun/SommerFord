import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProjectSchema = schema.create({
  name: schema.string(),
  visual_identity: schema.string(),
  competitor: schema.string(),
  project_type: schema.string(),
  dev_type: schema.string(),
  start_date: schema.date(),
  end_date: schema.date(),
  client_id: schema.number([
    rules.exists({ table: 'clients', column: 'id' }),
  ]),
})
