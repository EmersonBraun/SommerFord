import { Group } from 'src/pages/groups'
export interface GroupStateInterface {
  data: Group[];
}

const state: GroupStateInterface = {
  data: [],
};

export default state;
