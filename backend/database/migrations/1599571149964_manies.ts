import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Manies extends BaseSchema {
  protected tableName = 'manies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.integer('module_id').nullable()
      table.string('model_name').notNullable()
      table.string('table_name').notNullable()
      table.string('pivot_table_name').nullable()
      table.string('origin').notNullable()
      table.string('foreign').notNullable()

      table.foreign('module_id').references('id').inTable('modules').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
