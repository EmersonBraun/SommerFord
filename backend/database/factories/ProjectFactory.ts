import Factory from '@ioc:Adonis/Lucid/Factory'
import Project from 'App/Models/Project'
import { randomClientId } from './ClientFactory'
import { randomProjectId } from './ProjectFactory'
import { randomDevTypeId } from './DevTypeFactory'

export const ProjectFactory = Factory
  .define(Project, async ({faker}) => ({
    id: faker.lorem.words(),
    name: faker.lorem.words(),
    client_id: faker.lorem.words(),
    project_type: faker.lorem.words(),
    dev_type_id: faker.lorem.words(),
    id: faker.lorem.words(),
    competitor: faker.lorem.words(),
    client_id: await randomClientId(),
    project_type: await randomProjectId(),
    dev_type_id: await randomDevTypeId(),
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
