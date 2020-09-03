import { schema } from '@ioc:Adonis/Core/Validator'

export const PaymentStatusSchema = schema.create({
  payment_status: schema.string(),
})