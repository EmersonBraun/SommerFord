import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DevTypes extends BaseSchema {
  protected tableName = 'dev_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('dev_type').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
