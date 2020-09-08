import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PaymentSchema = schema.create({
  value: schema.number(),
  date: schema.date(),
  payment_status: schema.string(),
  client_id: schema.number([
    rules.exists({ table: 'clients', column: 'id' }),
  ]),
})
