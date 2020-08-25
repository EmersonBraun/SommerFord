import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'database/factories/'
}

function getName (module: Module) {
  return `${module.name.pascalCase}Factory.ts`
}

export async function createFactory (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('factory')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

