import { Relation } from 'src/pages/relations'
export interface RelationStateInterface {
  data: Relation[];
}

const state: RelationStateInterface = {
  data: [],
};

export default state;
