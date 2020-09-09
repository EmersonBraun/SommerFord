import { Field } from 'src/pages/fields'
export interface FieldStateInterface {
  data: Field[];
}

const state: FieldStateInterface = {
  data: [],
};

export default state;
