import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLUpload } from 'graphql-upload-minimal';

import { typeDefs, queryResolvers, commandResolvers } from '../../features';

export default makeExecutableSchema({
  typeDefs,
  resolvers: {
    Upload: GraphQLUpload,
    Query: queryResolvers,
    Mutation: commandResolvers,
  },
});
