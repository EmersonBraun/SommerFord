import Factory from '@ioc:Adonis/Lucid/Factory'
import Payment from 'App/Models/Payment'
import { randomClientId } from './ClientFactory'

export const PaymentFactory = Factory
  .define(Payment, async ({faker}) => ({
    value: faker.random.number(50),
    date: faker.date.future(1),
    payment_status: faker.lorem.words(3),
    client_id: await randomClientId(),
  }))
  .build()

export async function randomPaymentId () {
  const req = await Payment.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
