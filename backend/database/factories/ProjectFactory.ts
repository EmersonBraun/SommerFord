import Factory from '@ioc:Adonis/Lucid/Factory'
import Project from 'App/Models/Project'
import { randomClientId } from './ClientFactory'
import { randomProjectTypeId } from './ProjectTypeFactory'
import { randomDevTypeId } from './DevTypeFactory'

export const ProjectFactory = Factory
  .define(Project, async ({faker}) => ({
    name: faker.lorem.words(),
    project_type: await randomProjectTypeId(),
    client_id: await randomClientId(),
    dev_type_id: await randomDevTypeId(),
    visual_identity: faker.random.boolean(),
    competitor: faker.lorem.words(),
  }))
  .build()

export async function randomProjectId () {
  const req = await Project.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
