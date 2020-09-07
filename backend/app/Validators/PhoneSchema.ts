import { schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  phone: schema.string(),
  whatsapp: schema.boolean(),
})
