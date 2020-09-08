import { schema } from '@ioc:Adonis/Core/Validator'

export const UserSchema = schema.create({
  name: schema.string(),
  email: schema.string(),
  password: schema.string(),
  is_admin: schema.boolean(),
})
