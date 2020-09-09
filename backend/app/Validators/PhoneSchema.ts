import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  phone: schema.string(),
  whatsapp: schema.boolean(),
  client_id: schema.number([
    rules.exists({ table: 'clients', column: 'id' }),
  ]),
})
