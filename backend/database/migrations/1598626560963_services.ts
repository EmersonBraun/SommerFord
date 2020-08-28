import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
  protected tableName = 'services'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('service').notNullable()
      table.float('hour_needed').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}