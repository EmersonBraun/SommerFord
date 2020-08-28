import { schema } from '@ioc:Adonis/Core/Validator'

export const DevTypeSchema = schema.create({
  id: schema.increments(),
  dev_type: schema.string(),
})