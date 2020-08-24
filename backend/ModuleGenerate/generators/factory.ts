import { getFile, mountTemplate, createFile } from '../utils/file'

export async function createFactory (module) {
  const path = 'database/factories/'
  const name = `${module.name.pascalCase}Factory.ts`

  const file = getFile('factory')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}

