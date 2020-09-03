import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ClientFactory } from '../factories/ClientFactory'
import { UserFactory } from 'Database/factories/UserFactory'
import { ServiceFactory } from 'Database/factories/ServiceFactory'
import { GroupFactory } from 'Database/factories/GroupFactory'
import { ProjectTypeFactory } from 'Database/factories/ProjectTypeFactory'
import { ProjectFactory } from 'Database/factories/ProjectFactory'
import { DevTypeFactory } from 'Database/factories/DevTypeFactory'
import { PhoneFactory } from 'Database/factories/PhoneFactory'
import { PaymentFactory } from 'Database/factories/PaymentFactory'
import { PaymentStatusFactory } from 'Database/factories/PaymentStatusFactory'
import { ModulesFactory } from 'Database/factories/ModulesFactory'

export default class DBSeeder extends BaseSeeder {
  public async run () {
    await UserFactory.createMany(10)
    await ServiceFactory.createMany(10)
    await GroupFactory.createMany(10)
    await ProjectTypeFactory.createMany(10)
    await DevTypeFactory.createMany(10)
    await ClientFactory.createMany(10)
    await PhoneFactory.createMany(10)
    await PaymentStatusFactory.createMany(10)
    await ModulesFactory.createMany(10)
    await PaymentFactory.createMany(10)
    await ProjectFactory.createMany(10)
  }
}
