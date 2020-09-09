import { Service } from 'src/pages/services'
export interface ServiceStateInterface {
  data: Service[];
}

const state: ServiceStateInterface = {
  data: [],
};

export default state;
