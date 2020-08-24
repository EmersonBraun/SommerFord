import { getFile, mountTemplate, createFile } from '../utils/file'

export async function createSchema (module) {
  const path = 'app/Validators/'
  const name = `${module.name.pascal}Schema.ts`

  const file = getFile('schema')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
