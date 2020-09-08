import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ClientFactory } from 'Database/factories/ClientFactory'
import { UserFactory } from 'Database/factories/UserFactory'
import { ServiceFactory } from 'Database/factories/ServiceFactory'
import { GroupFactory } from 'Database/factories/GroupFactory'
import { PhoneFactory } from 'Database/factories/PhoneFactory'
import { PaymentStatusFactory } from 'Database/factories/PaymentStatusFactory'
import { PaymentFactory } from 'Database/factories/PaymentFactory'
import { FieldFactory } from 'Database/factories/FieldFactory'
import { RelationFactory } from 'Database/factories/RelationFactory'
import { ModuleFactory } from 'Database/factories/ModuleFactory'
import { ManyFactory } from 'Database/factories/ManyFactory'
import { ProjectFactory } from 'Database/factories/ProjectFactory'
import { DevTypeFactory } from 'Database/factories/DevTypeFactory'
import { ProjectTypeFactory } from 'Database/factories/ProjectTypeFactory'

export default class ClientSeeder extends BaseSeeder {
  public async run () {
    await ClientFactory.createMany(10)
    await UserFactory.createMany(10)
    await ServiceFactory.createMany(10)
    await GroupFactory.createMany(10)
    await PhoneFactory.createMany(10)
    await PaymentStatusFactory.createMany(10)
    await PaymentFactory.createMany(10)
    await FieldFactory.createMany(10)
    await RelationFactory.createMany(10)
    await ModuleFactory.createMany(10)
    await ManyFactory.createMany(10)
    await DevTypeFactory.createMany(10)
    await ProjectTypeFactory.createMany(10)
    await ProjectFactory.createMany(10)
  }
}
