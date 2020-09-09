import { MutationTree } from 'vuex';
import { PaymentStateInterface } from './state';
import { Payment } from 'src/pages/payments';

const mutation: MutationTree<PaymentStateInterface> = {
  getAll (state: PaymentStateInterface, payload: Payment[]) {
    state.data = payload
  },
};

export default mutation;
