import { BaseCommand } from '@adonisjs/ace'
// import Logger from '@ioc:Adonis/Core/Logger'
import fs from 'fs'
import path from 'path'
import prompts from 'prompts'
import handlebars from 'handlebars'

export default class ModuleGenerate extends BaseCommand {
  public static commandName = 'module:generate'
  public static description = 'Generate a module'

  public async handle () {
    const questions = [
      {
        type: 'text',
        name: 'moduleName',
        message: 'Name of module',
        validate: value => !!value || 'Name is required',
      },
      {
        type: 'select',
        name: 'isSubmodule',
        message: 'Is submodule?',
        choices: [
          { title: 'No', description: 'Pattern folders', value: false },
          { title: 'Yes', description: 'ex: foo/bar', value: true },
        ],
        initial: 0,
      },
      {
        type: prev => prev ? 'text' : null,
        name: 'submodule',
        message: 'Put path (ex: /foo or /foo/bar)',
        validate: value => !!value || 'Submodule is required',
      },
    ]

    function getFile () {
      return path.join(__dirname, '../../stubs/controller.hbs')
    }

    function ensureDirectoryExistence (filePath) {
      if (fs.existsSync(filePath)) {
        return true
      }
      fs.mkdirSync(filePath)
    }

    function mountTemplate (filePath, data) {
      const file = fs.readFileSync(filePath, {encoding: 'utf-8'})
      const template = handlebars.compile(file)
      return template({ ModuleName: data.moduleName })
    }

    function createFile (fileName, template) {
      fs.writeFile(fileName, template, error => {
        if (error) {
          console.log(error)
        }
        // Logger.info(`Created ${fileName}`)
      })
    }

    (async () => {
      const response = await prompts(questions)

      const filePath = getFile()
      const template = mountTemplate(filePath, response)

      const controllerPath = 'app/Controllers/Http/'
      const fileName = `${controllerPath}${response.moduleName}Controller.ts`
      ensureDirectoryExistence(controllerPath)
      createFile(fileName, template)
    })()
  }
}
