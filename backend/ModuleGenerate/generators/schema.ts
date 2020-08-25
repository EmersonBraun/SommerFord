import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'app/Validators/'
}

function getName (module: Module) {
  return `${module.name.pascalCase}Schema.ts`
}

export async function createSchema (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('schema')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
