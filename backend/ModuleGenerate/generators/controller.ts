import { getFile, mountTemplate, createFile } from '../utils/file'

export async function createController (module) {
  const path = 'app/Controllers/Http/'
  const name = `${module.name.pascalCasePlural}Controller.ts`

  const file = getFile('controller')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

