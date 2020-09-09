import { User } from 'src/pages/users'
export interface UserStateInterface {
  data: User[];
}

const state: UserStateInterface = {
  data: [],
};

export default state;
