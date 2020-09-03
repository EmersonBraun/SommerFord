import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.float('value').notNullable()
      table.dateTime('date').notNullable()
      table.integer('payment_status_id').notNullable()

      table.foreign('payment_status_id').references('id').inTable('payment_statuses').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}