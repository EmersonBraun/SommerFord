import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PaymentStatus from 'App/Models/PaymentStatus'

export default class PaymentStatusSeeder extends BaseSeeder {
  public async run () {
    await PaymentStatus.createMany([
      { payment_status: 'Expected'},
      { payment_status: 'Paid'},
      { payment_status: 'Delayed'},
    ])
  }
}
