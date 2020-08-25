import { getFile, mountTemplate, createFile} from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'app/Models/'
}

function getName (module: Module) {
  return `${module.name.pascalCase}.ts`
}

function getColumn (field) {
  if (field.isPrimary) {
    return '({ isPrimary: true })'
  }
  if (field.fieldType === 'datetime') {
    if (field.name === 'updatedAt' || field.name === 'updated_at') {
      return '.dateTime({ autoCreate: true, autoUpdate: true })'
    } else {
      return '.dateTime({ autoCreate: true })'
    }
  }
  return ''
}

function validateFields (module: Module) {
  return module.fields.map(f => {
    return {
      column: getColumn(f),
      type: f.fieldType,
      name: f.name,
    }
  })
}

export async function createModel (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('model')
  module.fields = validateFields(module)
  const template = mountTemplate(file, module)
  await createFile(name, path, template)
}
