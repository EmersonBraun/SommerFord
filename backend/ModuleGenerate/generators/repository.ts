import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'app/Repositories/'
}

function getName (module: Module) {
  return `${module.name.pascalCasePlural}Repository.ts`
}

export async function createRepository (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('repository')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
