import { schema } from '@ioc:Adonis/Core/Validator'

export const ProjectTypeSchema = schema.create({
  id: schema.increments(),
  project_type: schema.string(),
})