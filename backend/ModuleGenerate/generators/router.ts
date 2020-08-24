import { getFile, getContent, mountTemplate, appendInFile } from '../utils/file'

export async function createRoute (module) {
  const path = '../../../start/'
  const content = getContent(`${path}routes.ts`)

  const file = getFile('route')
  const template = mountTemplate(file, module)

  if (content.search(template) === -1) {
    await appendInFile('Route', path, template)
  }
}
