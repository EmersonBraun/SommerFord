import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('name').notNullable()
      table.integer('client_id').notNullable()
      table.integer('project_type').notNullable()
      table.integer('dev_type_id').notNullable()
      table.boolean('id').nullable()
      table.string('competitor').nullable()

      table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE')
      table.foreign('project_type').references('id').inTable('project_types').onDelete('CASCADE')
      table.foreign('dev_type_id').references('id').inTable('dev_types').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}