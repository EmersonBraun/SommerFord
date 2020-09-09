import { PaymentStatus } from 'src/pages/paymentsStatus'
export interface PaymentStatusStateInterface {
  data: PaymentStatus[];
}

const state: PaymentStatusStateInterface = {
  data: [],
};

export default state;
