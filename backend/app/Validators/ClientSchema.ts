import { schema } from '@ioc:Adonis/Core/Validator'

export const ClientSchema = schema.create({
  id: schema.increments(),
  name: schema.string(),
  email: schema.string(),
  role: schema.string(),
})