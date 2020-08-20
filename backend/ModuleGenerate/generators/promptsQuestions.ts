import prompts from 'prompts'
import { toCamelCase, toKebabCase, toPascalCase, toSnakeCase} from './utils'
import { moduleQuestion, field, relation, manyToMany, proceed } from './questions'

export async function getQuestions () {
  const module = {
    name: {},
    moreFields: true,
    fields: [
      {},
    ],
    moreMany: true,
    manyToMany: [
      {},
    ],
  }

  async function getModuleName () {
    const responseModule = await prompts(moduleQuestion)
    // const plural = pluralize(responseModule.moduleName)
    return {
      camelCase: toCamelCase(responseModule.moduleName),
      // camelCasePlural: toCamelCase(plural),
      kebabCase: toKebabCase(responseModule.moduleName),
      // kebabCasePlural: toKebabCase(plural),
      pascalCase: toPascalCase(responseModule.moduleName),
      // pascalCasePlural: toPascalCase(plural),
      snakeCase: toSnakeCase(responseModule.moduleName),
      // snakeCasePlural: toSnakeCase(plural),
    }
  }

  async function getFields () {
    const fieldData = {
      field: {
        name: '',
        fieldType: '',
        specifType: '',
        isRelationed: false,
      },
      relation: {},
    }
    fieldData.field = await prompts(field)
    fieldData.relation = fieldData.field.isRelationed ? await prompts(relation) : {}

    return fieldData
  }

  async function getManyToMany () {
    return await prompts(manyToMany(module.name))
  }

  async function isProceed (msg) {
    const response = await prompts(proceed(msg))
    return response.continue
  }

  module.name = await getModuleName()

  do {
    module.fields.push(await getFields())
  } while (await isProceed('More fields?'))

  if (await isProceed('Has many to many relations')) {
    do {
      module.manyToMany.push(await getManyToMany())
    } while (await isProceed('More many to many relations?'))
  }

  module.fields.shift()
  module.manyToMany.shift()
  return module
}
