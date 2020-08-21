import { BaseCommand } from '@adonisjs/ace'
import { moduleGenerate } from '../ModuleGenerate/generators'

export default class ModuleGenerate extends BaseCommand {
  public static commandName = 'module:generate'
  public static description = 'Generate a module'

  public async handle () {
    await moduleGenerate()
  }
}
