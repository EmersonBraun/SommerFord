import { Client } from 'src/pages/clients'
export interface ClientStateInterface {
  data: Client[];
  register: Client;
}

const state: ClientStateInterface = {
  data: [],
  register: {
    name: '',
    email: '',
    role: '',
  }
};

export default state;
