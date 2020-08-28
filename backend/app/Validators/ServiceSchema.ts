import { schema } from '@ioc:Adonis/Core/Validator'

export const ServiceSchema = schema.create({
  service: schema.string(),
  hour_needed: schema.number(),
})