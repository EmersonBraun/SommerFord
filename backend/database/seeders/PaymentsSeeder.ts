import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PaymentFactory } from '../factories/PaymentFactory'

export default class PaymentSeeder extends BaseSeeder {
  public async run () {
    await PaymentFactory.createMany(10)
  }
}
