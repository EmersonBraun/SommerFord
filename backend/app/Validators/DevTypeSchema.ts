import { schema } from '@ioc:Adonis/Core/Validator'

export const DevTypeSchema = schema.create({
  dev_type: schema.string(),
})