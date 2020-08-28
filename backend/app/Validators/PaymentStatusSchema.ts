import { schema } from '@ioc:Adonis/Core/Validator'

export const PaymentStatusSchema = schema.create({
  id: schema.increments(),
  payment_status: schema.string(),
})