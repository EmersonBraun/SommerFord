import { getFile, mountTemplate, createFile} from '../utils/file'

export async function createModel (module) {
  const path = 'app/Models/'
  const name = `${module.name.pascalCase}.ts`

  const file = getFile('model')
  const template = mountTemplate(file, module)

  await createFile(name, path, template)
}
