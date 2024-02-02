import collections from '../../../collections';
import { Referral } from '../../../common/types/graphql';

export default {
  getAllReferrals: async (): Promise<Referral[]> => {
    return await collections.referrals.find();
  },
};
