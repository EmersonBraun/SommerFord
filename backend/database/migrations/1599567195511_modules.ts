import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Modules extends BaseSchema {
  protected tableName = 'modules'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.integer('project_id').notNullable()
      table.string('name').notNullable()
      table.string('small_title').nullable()
      table.string('model_name').nullable()
      table.string('route_name').notNullable()

      table.foreign('project_id').references('id').inTable('projects').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}