import Factory from '@ioc:Adonis/Lucid/Factory'
import Payment from 'App/Models/Payment'
import { randomPaymentStatusId } from './PaymentStatusFactory'

export const PaymentFactory = Factory
  .define(Payment, async ({faker}) => ({
    value: faker.random.number(99),
    date: faker.date.future(1),
    payment_status_id: await randomPaymentStatusId(),
  }))
  .build()

export async function randomPaymentId () {
  const req = await Payment.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
