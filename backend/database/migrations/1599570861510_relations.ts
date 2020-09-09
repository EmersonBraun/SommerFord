import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Relations extends BaseSchema {
  protected tableName = 'relations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('model_name').notNullable()
      table.string('table_name').notNullable()
      table.integer('field_id').notNullable()
      table.string('field_type').nullable()

      table.foreign('field_id').references('id').inTable('fields').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
