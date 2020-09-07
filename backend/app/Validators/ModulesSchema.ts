import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ModulesSchema = schema.create({
  name: schema.string(),
  group_id: schema.number([
    rules.exists({ table: 'groups', column: 'id' }),
  ]),
})
