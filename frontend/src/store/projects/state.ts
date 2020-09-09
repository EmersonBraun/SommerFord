import { Project } from 'src/pages/projects'
export interface ProjectStateInterface {
  data: Project[];
}

const state: ProjectStateInterface = {
  data: [],
};

export default state;
