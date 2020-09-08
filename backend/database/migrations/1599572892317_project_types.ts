import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectTypes extends BaseSchema {
  protected tableName = 'project_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('project_type').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}