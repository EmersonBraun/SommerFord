import { Payment } from 'src/pages/payments'
export interface PaymentStateInterface {
  data: Payment[];
}

const state: PaymentStateInterface = {
  data: [],
};

export default state;
