import { getQuestions } from '../questions'
import { createMigration } from './migration'
// import { createFactory } from './factory'
// import { createSeeder } from './seeder'
// import { createSchema } from './schema'
// import { createController } from './controller'
// import { createRepository } from './repository'
// import { createModel } from './model'
// import { createRoute } from './router'
// import { createServices } from './services'

export async function moduleGenerate () {
  const module = await getQuestions()
  if (module) {
    createMigration(module)
    // createFactory(module)
    // createSeeder(module)
    // createSchema(module)
    // createController(module)
    // createRepository(module)
    // createModel(module)
    // createRoute(module)
    // createServices()
  }
}
