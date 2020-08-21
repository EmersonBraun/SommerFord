import { getFile, getContent, mountTemplate, createFile, appendInFile, copyFile } from './fileUtils'

export function createServices () {
  const pathOrigin = '../../ModuleGenerate/stubs/'
  const pathDestiny = 'app/Services/'

  copyFile('CRUD.ts', `${pathOrigin}CRUD.hbs`, `${pathDestiny}CRUD.ts`)
  copyFile('ResponseUtils.ts', `${pathOrigin}ResponseUtils.hbs`, `${pathDestiny}ResponseUtils.ts`)
}

export async function createController (module) {
  const path = 'app/Controllers/Http/'
  const name = `${module.name.pascalCasePlural}Controller.ts`

  const file = getFile('controller')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

export async function createFactory (module) {
  const path = 'database/factories/'
  const name = `${module.name.pascalCase}Factory.ts`

  const file = getFile('factory')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

export async function createMigration (module) {
  const path = 'database/migrations/'
  const name = `${Date.now()}_${module.name.snakeCasePlural}.ts`

  const file = getFile('migration')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

export async function createModel (module) {
  const path = 'app/Models/'
  const name = `${module.name.pascalCase}.ts`

  const file = getFile('model')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

export async function createRepository (module) {
  const path = 'app/Repositories/'
  const name = `${module.name.pascalCasePlural}Repository.ts`

  const file = getFile('repository')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

export async function createRoute (module) {
  const path = '../../../start/'
  const content = getContent(`${path}routes.ts`)

  const file = getFile('route')
  const template = mountTemplate(file, module)

  if (content.search(template) === -1) {
    await appendInFile('Route', path, template)
  }
}

export async function createSchema (module) {
  const path = 'app/Validators/'
  const name = `${module.name.pascal}Schema.ts`

  const file = getFile('schema')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

export async function createSeeder (module) {
  const path = 'database/seeders/'
  const name = `${module.name.pascalCasePlural}Seeder.ts`

  const file = getFile('seeder')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
