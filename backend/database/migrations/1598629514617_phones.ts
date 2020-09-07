import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Phones extends BaseSchema {
  protected tableName = 'phones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('phone').notNullable()
      table.boolean('whatsapp').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
