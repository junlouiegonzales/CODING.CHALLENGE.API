import { gql } from 'apollo-server-core';

export default gql`
  scalar Upload

  type Referral {
    id: String
    givenName: String
    surname: String
    phone: String
    email: String
    homeNameNumber: String
    street: String
    suburb: String
    state: String
    postcode: String
    country: String
  }

  type Response {
    response: Boolean
  }

  type Mutation {
    createReferral(
      givenName: String
      surname: String
      phone: String
      email: String
      homeNameNumber: String
      street: String
      suburb: String
      state: String
      postcode: String
      country: String
    ): Response
    updateReferral(
      referralId: String
      givenName: String
      surname: String
      phone: String
      email: String
      homeNameNumber: String
      street: String
      suburb: String
      state: String
      postcode: String
      country: String
    ): Response
    removeReferral(referralId: String): Response
  }

  type Query {
    getAllReferrals: [Referral]
  }
`;
