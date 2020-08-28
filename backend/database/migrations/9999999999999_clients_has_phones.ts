import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientsHasPhones extends BaseSchema {
  protected tableName = 'clients_has_phones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('phones_id').unsigned().nullable()
      table.integer('clients_id').unsigned().nullable()

      table.foreign('phones_id').references('id').inTable('phones').onDelete('CASCADE')
      table.foreign('clients_id').references('id').inTable('clients').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}