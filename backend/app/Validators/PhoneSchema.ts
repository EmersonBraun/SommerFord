import { schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  id: schema.increments(),
  phone: schema.string(),
  whatsapp: schema.boolean(),
})