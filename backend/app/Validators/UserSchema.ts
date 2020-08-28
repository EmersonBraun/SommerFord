import { schema } from '@ioc:Adonis/Core/Validator'

export const UserSchema = schema.create({
  name: schema.string(),
  password: schema.string(),
  is_admin: schema.string(),
})