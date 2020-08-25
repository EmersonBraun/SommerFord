import { getQuestions } from '../questions'
// import { createMigration } from './migration'
// import { createSeeder } from './seeder'
// import { createController } from './controller'
// import { createRepository } from './repository'
// import { createFactory } from './factory'
// import { createSchema } from './schema'
// import { createModel } from './model'
// import { createRoute } from './router'
import { createAuxFiles } from './auxFiles'

export async function moduleGenerate () {
  const module = await getQuestions()
  if (module) {
    // createMigration(module)
    // createSeeder(module)
    // createController(module)
    // createRepository(module)
    // createFactory(module)
    // createSchema(module)
    // createModel(module)
    // createRoute(module)
    createAuxFiles()
  }
}
