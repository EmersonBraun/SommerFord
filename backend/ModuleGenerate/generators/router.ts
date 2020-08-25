import { getFile, getContent, mountTemplate, appendInFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'

function getPath () {
  return '../../../start/'
}

export async function createRoute (module: Module) {
  const path = getPath()
  const content = getContent(`${path}routes.ts`)

  const file = getFile('route')
  const template = mountTemplate(file, module)

  if (content.search(template) === -1) {
    await appendInFile('Route', path, template)
  }
}
