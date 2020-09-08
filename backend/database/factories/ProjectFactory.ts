import Factory from '@ioc:Adonis/Lucid/Factory'
import Project from 'App/Models/Project'
import { randomClientId } from './ClientFactory'

export const ProjectFactory = Factory
  .define(Project, async ({faker}) => ({
    name: faker.lorem.words(3),
    visual_identity: faker.random.boolean(),
    competitor: faker.lorem.words(3),
    project_type: faker.lorem.words(3),
    dev_type: faker.lorem.words(3),
    start_date: faker.date.future(2),
    end_date: faker.date.future(2),
    client_id: await randomClientId(),
  }))
  .build()

export async function randomProjectId () {
  const req = await Project.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
