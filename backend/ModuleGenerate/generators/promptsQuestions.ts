import prompts from 'prompts'
import Logger from '@poppinss/fancy-logs'
import pluralize from 'pluralize'
import { toCamelCase, toKebabCase, toPascalCase, toSnakeCase} from './nameUtils'
import { moduleQuestion, field, relation, manyToMany, proceed } from './questions'

export interface Module {
  name: any,
  fields:any,
  relations:any,
  manyToMany: any,
}

const moduleToGenerate: Module = {
  name: {},
  fields: [],
  relations: [],
  manyToMany: [],
}

export async function getQuestions () {
  async function getModuleName () {
    const responseModule = await prompts(moduleQuestion)
    const plural = pluralize(responseModule.moduleName)
    return {
      camelCase: toCamelCase(responseModule.moduleName),
      camelCasePlural: toCamelCase(plural),
      kebabCase: toKebabCase(responseModule.moduleName),
      kebabCasePlural: toKebabCase(plural),
      pascalCase: toPascalCase(responseModule.moduleName),
      pascalCasePlural: toPascalCase(plural),
      snakeCase: toSnakeCase(responseModule.moduleName),
      snakeCasePlural: toSnakeCase(plural),
    }
  }

  async function getFields () {
    let fieldData = {
      name: '',
      fieldType: '',
      specificType: '',
      isRelationed: false,
    }
    fieldData = await prompts(field)
    moduleToGenerate.relations = fieldData.isRelationed ? await prompts(relation) : {}

    return fieldData
  }

  async function getManyToMany () {
    return await prompts(manyToMany(moduleToGenerate.name))
  }

  async function finalize () {
    console.clear()
    Logger.info(`Module: ${moduleToGenerate.name.pascalCase}`)
    const fields = moduleToGenerate.fields.map(f => f.name).join(', ')
    Logger.info(`fields: ${fields}`)
    return await isProceed('Is this data correct? Do you want to proceed?')
  }

  async function isProceed (msg: string) {
    const response = await prompts(proceed(msg))
    return response.continue
  }

  moduleToGenerate.name = await getModuleName()
  do {
    moduleToGenerate.fields.push(await getFields())
  } while (await isProceed('More fields?'))

  if (await isProceed('Has many to many relations')) {
    do {
      moduleToGenerate.manyToMany.push(await getManyToMany())
    } while (await isProceed('More many to many relations?'))
  }

  if(await finalize()) {
    return moduleToGenerate
  }
  return false
}
