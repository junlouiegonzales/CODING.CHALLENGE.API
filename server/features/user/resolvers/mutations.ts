import {
  MutationCreateUserArgs,
  MutationRemoveUserArgs,
} from '../../../common/types/graphql';
import collections from '../../../collections';

export default {
  createUser: async (
    parent: unknown,
    request: MutationCreateUserArgs
  ): Promise<void> => {
    const { firstName, lastName, contactNumber } = request;
    const user = new collections.users({
      firstName,
      lastName,
      contactNumber,
      createdAt: new Date(),
      createdByName: 'anonymous',
      createdById: 'anonymous',
    });
    await user.save();
  },

  removeUser: async (
    parent: unknown,
    request: MutationRemoveUserArgs
  ): Promise<void> => {
    const { userId } = request;
    await collections.users.remove({ _id: userId });
  },
};
