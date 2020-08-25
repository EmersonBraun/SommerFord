import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'app/Validators/'
}

function getName (module: Module) {
  return `${module.name.pascalCase}Schema.ts`
}

function validateFields (module: Module) {
  return module.fields.filter(f => !f.isRelationed)
}

export async function createSchema (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('schema')
  module.fields = validateFields(module)
  const template = mountTemplate(file, module)
  await createFile(name, path, template)
}
