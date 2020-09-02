import { Client } from 'src/pages/clients'
export interface ClientStateInterface {
  data: Client[];
}

const state: ClientStateInterface = {
  data: []
};

export default state;
