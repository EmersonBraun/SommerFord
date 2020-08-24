import { getFile, mountTemplate, createFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return 'database/migrations/'
}

function getName (module: Module) {
  return `${Date.now()}_${module.name.snakeCasePlural}.ts`
}

function manyName (name: string) {
  return `9999999999999_${name}.ts`
}

function getType (field) {
  if (field.isPrimary) {
    return 'increments'
  }
  return field.fieldType
}

function getNullable (field) {
  if (field.isRequired) {
    return 'notNullable'
  }
  return 'nullable'
}

function validateFields (module: Module) {
  return module.fields.map(f => {
    return {
      type: getType(f),
      name: f.name,
      nullable: getNullable(f),
    }
  })
}

function createManyToMany (module: Module, path: string) {
  module.manyToMany.map(many => {
    const file = getFile('migration_many_to_many')
    const template = mountTemplate(file, {many})
    createFile(manyName(many.pivotTable), path, template)
  })
}

export async function createMigration (module: Module) {
  const path = getPath()
  const name = getName(module)

  const file = getFile('migration')
  module.fields = validateFields(module)
  const template = mountTemplate(file, module)

  await createFile(name, path, template)

  if (module.manyToMany) {
    await createManyToMany(module, path)
  }
}
