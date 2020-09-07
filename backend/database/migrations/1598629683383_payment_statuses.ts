import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PaymentStatuses extends BaseSchema {
  protected tableName = 'payment_statuses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('payment_status').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
