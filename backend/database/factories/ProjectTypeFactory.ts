import Factory from '@ioc:Adonis/Lucid/Factory'
import ProjectType from 'App/Models/ProjectType'

export const ProjectTypeFactory = Factory
  .define(ProjectType, ({faker}) => ({
    id: faker.random.number({min:1, max:10}),
    project_type: faker.lorem.words(3),
  }))
  .build()

export async function randomProjectTypeId () {
  const req = await ProjectType.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
