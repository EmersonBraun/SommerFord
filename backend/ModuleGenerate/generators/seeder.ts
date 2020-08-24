import { getFile, mountTemplate, createFile } from '../utils/file'

export async function createSeeder (module) {
  const path = 'database/seeders/'
  const name = `${module.name.pascalCasePlural}Seeder.ts`

  const file = getFile('seeder')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
