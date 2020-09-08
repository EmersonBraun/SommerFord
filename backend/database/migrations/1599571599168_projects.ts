import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('name').notNullable()
      table.boolean('visual_identity').nullable()
      table.string('competitor').nullable()
      table.string('project_type').nullable()
      table.string('dev_type').nullable()
      table.integer('client_id').notNullable()
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      // table.timestamps()

      table.foreign('client_id').references('id').inTable('clients').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
