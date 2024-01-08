import collections from '../../../collections';
import { User } from '../../../common/types/graphql';

export default {
  getAllUsers: async (): Promise<User[]> => {
    return await collections.users.find();
  },
};
