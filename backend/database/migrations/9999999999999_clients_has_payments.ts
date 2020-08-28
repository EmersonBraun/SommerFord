import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientsHasPayments extends BaseSchema {
  protected tableName = 'clients_has_payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('clients_id').unsigned().nullable()
      table.integer('payments_id').unsigned().nullable()

      table.foreign('clients_id').references('id').inTable('clients').onDelete('CASCADE')
      table.foreign('payments_id').references('id').inTable('payments').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}