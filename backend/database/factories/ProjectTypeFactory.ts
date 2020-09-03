import Factory from '@ioc:Adonis/Lucid/Factory'
import ProjectType from 'App/Models/ProjectType'

export const ProjectTypeFactory = Factory
  .define(ProjectType, ({faker}) => ({
    id: faker.lorem.words(),
    project_type: faker.lorem.words(),
  }))
  .build()

export async function randomProjectTypeId () {
  const req = await ProjectType.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
