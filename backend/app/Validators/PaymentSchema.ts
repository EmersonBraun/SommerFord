import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PaymentSchema = schema.create({
  id: schema.increments(),
  value: schema.float(),
  date: schema.datetime(),
  payment_status_id: schema.integer(),
  payment_status_id: schema.integer([
    rules.exists({ table: 'payment_statuses', column: 'id' }),
  ]),
})