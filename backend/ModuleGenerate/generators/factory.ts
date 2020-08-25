import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'database/factories/'
}

function getName (module: Module) {
  return `${module.name.pascalCase}Factory.ts`
}

function getType (field) {
  switch (field.fieldType) {
    case 'increments':
      return 'random.number({min:1, max:10})'
    case 'string':
      return 'random.arrayElement([])'
    case 'integer':
      return 'random.number({min:1, max:10})'
    case 'bigInteger':
      return 'random.number({min:1, max:10})'
    case 'text':
      return 'lorem.words(3)'
    case 'float':
      return 'random.float()'
    case 'decimal':
      return 'random.float()'
    case 'boolean':
      return 'random.boolean()'
    case 'date':
      return 'date.future(2)'
    case 'datetime':
      return 'lorem.future(2)'
    case 'time':
      return 'lorem.future(2)'
    case 'timestamp':
      return 'lorem.future(2)'
    default:
      return 'lorem.words()'
  }
}

function validateFields (module: Module) {
  const notRelateds = module.fields.filter(f => !f.isRelationed)
  return notRelateds.map(f => {
    return {
      specificType: getType(f),
      name: f.name,
    }
  })
}

export async function createFactory (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('factory')
  module.fields = validateFields(module)
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

