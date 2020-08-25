import prompts from 'prompts'
import Logger from '@poppinss/fancy-logs'
// import { moduleQuestion, field, relation, manyToMany, proceed } from './questions'
import { moduleQuestion, proceed } from './questions'
// import { nameOptions, toPascalCase, toCamelCase } from '../utils/name'
import { nameOptions } from '../utils/name'

export interface Module {
  name: any,
  fields:any,
  relations:any,
  manyToMany: any,
  hasDatetime: boolean
}

const moduleToGenerate: Module = {
  name: {},
  fields: [],
  relations: [],
  manyToMany: [],
  hasDatetime: false,
}

async function getModuleName () {
  const responseModule = await prompts(moduleQuestion)
  return nameOptions(responseModule.moduleName)
}

// async function getFields () {
//   let fieldData = {
//     name: '',
//     fieldType: '',
//     specificType: '',
//     isRelationed: false,
//   }
//   fieldData = await prompts(field)

//   if (fieldData.fieldType === 'datetime') {
//     moduleToGenerate.hasDatetime = true
//   }

//   if (fieldData.isRelationed) {
//     await getRelated (fieldData.name)
//   }

//   return fieldData
// }

// async function getRelated (field) {
//   let relationData = await prompts(relation)
//   relationData.field = field
//   relationData.camelName = toCamelCase(relationData.modelName)
//   relationData.modelName = toPascalCase(relationData.modelName)

//   moduleToGenerate.relations.push(relationData)
// }

// async function getManyToMany () {
//   let manyData = await prompts(manyToMany(moduleToGenerate.name.snakeCasePlural))
//   manyData.className = toPascalCase(manyData.pivotTable)
//   manyData.moduleTable = moduleToGenerate.name.snakeCasePlural
//   manyData.camelName = toCamelCase(manyData.modelName)
//   manyData.modelName = toPascalCase(manyData.modelName)

//   return manyData
// }

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

export async function getQuestions () {
  moduleToGenerate.name = await getModuleName()
  // Logger.info('now insert the necessary fields')
  // do {
  //   moduleToGenerate.fields.push(await getFields())
  // } while (await isProceed('More fields?'))

  // if (await isProceed('Has many to many relations')) {
  //   do {
  //     moduleToGenerate.manyToMany.push(await getManyToMany())
  //   } while (await isProceed('More many to many relations?'))
  // }

  if(await finalize()) {
    return moduleToGenerate
  }
  return false
}
