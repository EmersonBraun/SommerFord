import { schema } from '@ioc:Adonis/Core/Validator'

export const ProjectTypeSchema = schema.create({
  project_type: schema.string(),
})
