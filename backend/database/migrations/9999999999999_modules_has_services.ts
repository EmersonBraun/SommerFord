import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ModulesHasServices extends BaseSchema {
  protected tableName = 'modules_has_services'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('module_id').unsigned().nullable()
      table.integer('service_id').unsigned().nullable()

      table.foreign('module_id').references('id').inTable('modules').onDelete('CASCADE')
      table.foreign('service_id').references('id').inTable('services').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
