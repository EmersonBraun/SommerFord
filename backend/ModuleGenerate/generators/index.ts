import { getQuestions } from './promptsQuestions'
import {
  // createMigration,
  // createController,
  // createFactory,
  // createSeeder,
  // createSchema,
  // createRepository,
  // createModel,
  createRoute,
  // createServices,
} from './creator'

export async function moduleGenerate () {
  const module = await getQuestions()
  if (module) {
    // createMigration(module)
    // createFactory(module)
    // createSeeder(module)
    // createSchema(module)
    // createController(module)
    // createRepository(module)
    // createModel(module)
    createRoute(module)
    // createServices()
  }
}
