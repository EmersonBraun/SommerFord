import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'
import Logger from '@poppinss/fancy-logs'

handlebars.registerHelper('isTrue', (a, b) => a && b)
handlebars.registerHelper('isUpdatedAt', (a) => a === 'updatedAt')
handlebars.registerHelper('isDatetime', (a) => a === 'datetime')

export function getFile (type) {
  const file = path.join(__dirname, `../../../ModuleGenerate/stubs/${type}.hbs`)
  return fs.readFileSync(file, {encoding: 'utf-8'})
}

export function getContent (filePath) {
  const file = path.join(__dirname, filePath)
  return fs.readFileSync(file, {encoding: 'utf-8'})
}

export function ensureDirectoryExistence (filePath) {
  try {
    const exist = fs.existsSync(filePath)
    if(!exist) {
      try {
        fs.mkdirSync(filePath, { recursive: true })
      } catch (error) {
        console.error(error)
        throw new Error('Error to create folder')
      }
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error to find folder')
  }
}

export function mountTemplate (file, module) {
  const template = handlebars.compile(file)
  return template({ module })
}

export function createFile (name, path, template) {
  ensureDirectoryExistence(path)
  const fileName = `${path}${name}`

  try {
    fs.writeFileSync(fileName, template)
    Logger.success(`Create ${name}`)
  } catch (error) {
    Logger.warn(`Error to create file ${name}`, error)
  }
}

export function appendInFile (name, path, template) {
  try {
    fs.appendFileSync(path, template)
    Logger.success(`Added ${name}`)
  } catch (error) {
    Logger.warn(`Error to create file ${name}`, error)
  }
}

export function copyFile (name, pathOrigin, pathDestiny) {
  ensureDirectoryExistence(pathDestiny)

  try {
    fs.copyFileSync(pathOrigin, pathDestiny)
    Logger.success(`Create ${name}`)
  } catch (error) {
    Logger.warn('Error to create file', error)
  }
}
