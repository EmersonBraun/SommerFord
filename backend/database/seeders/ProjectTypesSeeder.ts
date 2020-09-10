import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProjectType from 'App/Models/ProjectType'

export default class ProjectTypeSeeder extends BaseSeeder {
  public async run () {
    await ProjectType.createMany([
      { project_type: 'Site'},
      { project_type: 'Blog'},
      { project_type: 'E-commerce'},
      { project_type: 'Internal System'},
      { project_type: 'API (only)'},
      { project_type: 'Font aplication (only)'},
      { project_type: 'Mobile aplication'},
      { project_type: 'Mobile aplication (only)'},
    ])
    // await ProjectTypeFactory.createMany(10)
  }
}
