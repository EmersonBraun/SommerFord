import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fields extends BaseSchema {
  protected tableName = 'fields'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.integer('module_id').notNullable()
      table.string('field_type').notNullable()
      table.string('name').notNullable()
      table.boolean('required').nullable()
      table.boolean('relationed').nullable()

      table.string('relationed_name').nullable()
      table.string('relationed_model_name').nullable()
      table.string('relationed_table_name').nullable()

      table.foreign('module_id').references('id').inTable('modules').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
