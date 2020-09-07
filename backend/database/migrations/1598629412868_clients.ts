import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('name').notNullable()
      table.string('email').nullable()
      table.string('role').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
