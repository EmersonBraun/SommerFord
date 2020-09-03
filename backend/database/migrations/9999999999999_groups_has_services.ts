import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupsHasServices extends BaseSchema {
  protected tableName = 'groups_has_services'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('group_id').unsigned().nullable()
      table.integer('service_id').unsigned().nullable()

      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
      table.foreign('service_id').references('id').inTable('services').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
