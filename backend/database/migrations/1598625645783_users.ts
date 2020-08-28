import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.boolean('is_admin').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}