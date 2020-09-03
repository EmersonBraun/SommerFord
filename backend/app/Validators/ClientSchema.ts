import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ClientSchema = schema.create({
  name: schema.string(),
  email: schema.string({},[
    rules.unique({ table: 'clients', column: 'email'}),
  ]),
  role: schema.string(),
})
