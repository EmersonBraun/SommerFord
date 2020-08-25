import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'database/seeders/'
}

function getName (module: Module) {
  return `${module.name.pascalCasePlural}Seeder.ts`
}

export async function createSeeder (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('seeder')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
