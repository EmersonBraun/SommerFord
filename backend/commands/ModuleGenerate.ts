import { BaseCommand } from '@adonisjs/ace'
import { getQuestions } from '../ModuleGenerate/generators/promptsQuestions'
import { createController } from '../ModuleGenerate/generators/creator'

export default class ModuleGenerate extends BaseCommand {
  public static commandName = 'module:generate'
  public static description = 'Generate a module'

  public async handle () {
    const module = await getQuestions()
    await createController(module, this.logger)
  }
}
