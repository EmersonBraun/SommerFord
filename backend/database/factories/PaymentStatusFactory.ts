import Factory from '@ioc:Adonis/Lucid/Factory'
import PaymentStatus from 'App/Models/PaymentStatus'

export const PaymentStatusFactory = Factory
  .define(PaymentStatus, ({faker}) => ({
    payment_status: faker.lorem.words(3),
  }))
  .build()

export async function randomPaymentStatusId () {
  const req = await PaymentStatus.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
