import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'database/factories/'
}

function getName (module: Module) {
  return `${module.name.pascalCase}Factory.ts`
}

function getType (/*field*/) {
  // const specificTypes = [
  //   { increments: 'lorem.words()' },
  //   { string: 'lorem.words()' },
  //   { integer: 'lorem.words()' },
  //   { bigInteger: 'lorem.words()' },
  //   { text: 'lorem.words(5)' },
  //   { float: 'lorem.words()' },
  //   { decimal: 'lorem.words()' },
  //   { boolean: 'lorem.words()' },
  //   { date: 'lorem.words()' },
  //   { datetime: 'lorem.words()' },
  //   { time: 'lorem.words()' },
  //   { timestamp: 'lorem.words()' },
  // ]

  // return specificTypes[field.fieldType]
  return 'lorem.words()'
}

function validateFields (module: Module) {
  const notRelateds = module.fields.filter(f => !f.isRelationed)
  return notRelateds.map(f => {
    return {
      specificType: getType(/*f*/),
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

