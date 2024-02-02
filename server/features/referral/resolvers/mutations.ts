import {
  MutationCreateReferralArgs,
  MutationRemoveReferralArgs,
  MutationUpdateReferralArgs,
} from '../../../common/types/graphql';
import collections from '../../../collections';

export default {
  createReferral: async (
    parent: unknown,
    request: MutationCreateReferralArgs
  ): Promise<void> => {
    const {
      givenName,
      surname,
      phone,
      email,
      homeNameNumber,
      street,
      state,
      suburb,
      postcode,
      country,
    } = request;
    const user = new collections.referrals({
      givenName,
      surname,
      phone,
      email,
      homeNameNumber,
      street,
      state,
      suburb,
      postcode,
      country,
      createdAt: new Date(),
      createdByName: 'anonymous',
      createdById: 'anonymous',
    });
    await user.save();
  },
  updateReferral: async (
    parent: unknown,
    request: MutationUpdateReferralArgs
  ): Promise<void> => {
    const {
      referralId,
      givenName,
      surname,
      phone,
      email,
      homeNameNumber,
      street,
      state,
      suburb,
      postcode,
      country,
    } = request;
    const referral = await collections.referrals.findById(referralId);
    if (!referral)
      throw new Error(
        'Referral not found, your request maybe deleted or modified.'
      );

    await collections.referrals.updateOne(
      {
        _id: referralId,
      },
      {
        $set: {
          givenName,
          surname,
          phone,
          email,
          homeNameNumber,
          street,
          state,
          suburb,
          postcode,
          country,
          updatedAt: new Date(),
          updatedByName: 'anonymous',
          updatedById: 'anonymous',
        },
      }
    );
  },
  removeReferral: async (
    parent: unknown,
    request: MutationRemoveReferralArgs
  ): Promise<void> => {
    const { referralId } = request;
    const referral = await collections.referrals.findById(referralId);
    if (!referral)
      throw new Error(
        'Referral not found, your request maybe deleted or modified.'
      );

    await collections.referrals.remove({ _id: referralId });
  },
};
