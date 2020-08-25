import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'app/Controllers/Http/'
}

function getName (module: Module) {
  return `${module.name.pascalCasePlural}Controller.ts`
}

export async function createController (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('controller')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

