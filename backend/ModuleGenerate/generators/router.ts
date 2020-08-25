import { getFile, getContent, mountTemplate, appendInFile } from '../utils/file'
import { Module } from 'ModuleGenerate/questions'
import Logger from '@poppinss/fancy-logs'

function getName (module: Module) {
  return `Route ${module.name.kebabCasePlural}`
}

function getPath () {
  return '../../../start/routes.ts'
}

export async function createRoute (module: Module) {
  const path = getPath()
  const content = getContent(path)
  const name = getName(module)

  const file = getFile('route')
  const template = mountTemplate(file, module)

  if (content.indexOf(template) === -1) {
    await appendInFile(name, path, template)
  } else {
    Logger.warn(`${name} already exists`)
  }
}
