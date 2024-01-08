import { gql } from 'apollo-server-core';

export default gql`
  scalar Upload

  type User {
    id: String
    firstName: String
    lastName: String
    contactNumber: String
  }

  type Response {
    response: Boolean
  }

  type Mutation {
    createUser(
      firstName: String
      lastName: String
      contactNumber: String
    ): Response
    removeUser(userId: String): Response
  }

  type Query {
    getAllUsers: [User]
  }
`;
