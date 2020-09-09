import { MutationTree } from 'vuex';
import { PaymentStatusStateInterface } from './state';
import { PaymentStatus } from 'src/pages/paymentsStatus';

const mutation: MutationTree<PaymentStatusStateInterface> = {
  getAll (state: PaymentStatusStateInterface, payload: PaymentStatus[]) {
    state.data = payload
  },
};

export default mutation;
