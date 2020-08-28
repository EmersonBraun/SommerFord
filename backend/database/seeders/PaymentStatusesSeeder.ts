import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PaymentStatusFactory } from '../factories/PaymentStatusFactory'

export default class PaymentStatusSeeder extends BaseSeeder {
  public async run () {
    await PaymentStatusFactory.createMany(10)
  }
}
