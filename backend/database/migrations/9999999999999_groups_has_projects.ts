import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupsHasProjects extends BaseSchema {
  protected tableName = 'groups_has_projects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('project_type_id').unsigned().nullable()
      table.integer('group_id').unsigned().nullable()

      table.foreign('project_type_id').references('id').inTable('project_types').onDelete('CASCADE')
      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
