import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.float('value').nullable()
      table.date('date').notNullable()
      table.integer('client_id').notNullable()
      table.string('payment_status').notNullable()

      table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}