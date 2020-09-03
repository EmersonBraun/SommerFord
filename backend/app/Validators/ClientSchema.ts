import { schema } from '@ioc:Adonis/Core/Validator'

export const ClientSchema = schema.create({
  name: schema.string(),
  email: schema.string(),
  role: schema.string(),
})