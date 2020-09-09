import { Phone } from 'src/pages/phones'
export interface PhoneStateInterface {
  data: Phone[];
}

const state: PhoneStateInterface = {
  data: [],
};

export default state;
