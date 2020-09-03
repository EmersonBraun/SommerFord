import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectsHasModules extends BaseSchema {
  protected tableName = 'projects_has_modules'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('modules_id').unsigned().nullable()
      table.integer('projects_id').unsigned().nullable()

      table.foreign('modules_id').references('id').inTable('modules').onDelete('CASCADE')
      table.foreign('projects_id').references('id').inTable('projects').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}