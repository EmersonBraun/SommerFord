import { getFile, mountTemplate, createFile } from '../utils/file'

export async function createRepository (module) {
  const path = 'app/Repositories/'
  const name = `${module.name.pascalCasePlural}Repository.ts`

  const file = getFile('repository')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
