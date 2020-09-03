import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientsHasPayments extends BaseSchema {
  protected tableName = 'clients_has_payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('client_id').unsigned().nullable()
      table.integer('payment_id').unsigned().nullable()

      table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE')
      table.foreign('payment_id').references('id').inTable('payments').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
