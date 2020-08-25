import { getFile, mountTemplate, createFile} from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'app/Models/'
}

function getName (module: Module) {
  return `${module.name.pascalCase}.ts`
}

export async function createModel (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('model')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
