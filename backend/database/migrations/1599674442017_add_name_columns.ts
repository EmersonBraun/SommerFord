import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Relations extends BaseSchema {
  protected tableName = 'relations'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('name').nullable()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('name')
    })
  }
}
