import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'

export function getFile (type) {
  const file = path.join(__dirname, `../../../ModuleGenerate/stubs/${type}.hbs`)
  return fs.readFileSync(file, {encoding: 'utf-8'})
}

export async function ensureDirectoryExistence (filePath) {
  if (fs.existsSync(filePath)) {
    return true
  }
  fs.mkdir(filePath, { recursive: true }, err => {
    if (err) {
      console.log(err)
    }
  })
}

export function mountTemplate (file, module) {
  const template = handlebars.compile(file)
  return template({ module })
}

export function createFile (fileName, template, logger) {
  fs.writeFile(fileName, template, error => {
    if (error) {
      logger.warn(`Error to create ${fileName}`)
      console.error(error)
    }
    logger.success(`Created ${fileName}`)
  })
}
