import { getFile, ensureDirectoryExistence, mountTemplate, createFile } from './'

export async function createController (module, logger) {
  const controllerPath = 'app/Controllers/Http/'
  const fileName = `${controllerPath}${module.name.pascalCase}Controller.ts`

  const file = getFile('controller')
  const template = mountTemplate(file, module)
  const folder = await ensureDirectoryExistence(controllerPath)
  if (folder) {
    createFile(fileName, template, logger)
  }
}

export function createFactory (/*module*/) {
  // const filePath = getFile('controller')
  // const template = mountTemplate(filePath, module)

  // const controllerPath = 'app/Controllers/Http/'
  // const fileName = `${controllerPath}${module.moduleName}Controller.ts`
  // ensureDirectoryExistence(controllerPath)
  // createFile(fileName, template)
}

export function createMigration (/*module*/) {
  // const filePath = getFile('controller')
  // const template = mountTemplate(filePath, module)

  // const controllerPath = 'app/Controllers/Http/'
  // const fileName = `${controllerPath}${module.moduleName}Controller.ts`
  // ensureDirectoryExistence(controllerPath)
  // createFile(fileName, template)
}

export function createModel (/*module*/) {
  // const filePath = getFile('controller')
  // const template = mountTemplate(filePath, module)

  // const controllerPath = 'app/Controllers/Http/'
  // const fileName = `${controllerPath}${module.moduleName}Controller.ts`
  // ensureDirectoryExistence(controllerPath)
  // createFile(fileName, template)
}

export function createRepository (/*module*/) {
  // const filePath = getFile('controller')
  // const template = mountTemplate(filePath, module)

  // const controllerPath = 'app/Controllers/Http/'
  // const fileName = `${controllerPath}${module.moduleName}Controller.ts`
  // ensureDirectoryExistence(controllerPath)
  // createFile(fileName, template)
}

export function createRoute (/*module*/) {
  // const filePath = getFile('controller')
  // const template = mountTemplate(filePath, module)

  // const controllerPath = 'app/Controllers/Http/'
  // const fileName = `${controllerPath}${module.moduleName}Controller.ts`
  // ensureDirectoryExistence(controllerPath)
  // createFile(fileName, template)
}

export function createSchema (/*module*/) {
  // const filePath = getFile('controller')
  // const template = mountTemplate(filePath, module)

  // const controllerPath = 'app/Controllers/Http/'
  // const fileName = `${controllerPath}${module.moduleName}Controller.ts`
  // ensureDirectoryExistence(controllerPath)
  // createFile(fileName, template)
}

export function createSeeder (/*module*/) {
  // const filePath = getFile('controller')
  // const template = mountTemplate(filePath, module)

  // const controllerPath = 'app/Controllers/Http/'
  // const fileName = `${controllerPath}${module.moduleName}Controller.ts`
  // ensureDirectoryExistence(controllerPath)
  // createFile(fileName, template)
}
