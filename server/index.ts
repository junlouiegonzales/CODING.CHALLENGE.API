import { ApolloServer } from 'apollo-server-express';
import apolloServerConfig from './configs/apollo';
import mongodbConfig from './configs/mongoose';
import httpServer from './configs/apollo/http-server';
import middleware from './configs/apollo/middleware';
import mongoose from 'mongoose';

(async (): Promise<void> => {
  /**
   * Database configuration
   */
  await mongoose.connect('mongodb://localhost:27017/agraph', mongodbConfig);
  mongoose.set('debug', false);
  mongoose.connection.on('error', () => {
    throw new Error('unable to connect to database');
  });

  /**
   * App Server Configuration
   */
  const server = new ApolloServer(apolloServerConfig);
  await server.start();

  server.applyMiddleware(middleware);

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: process.env.SERVER_PORT }, resolve);
  });

  console.log('*************************************************************');
  console.log(
    `🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`
  );
  console.log(`⚡️ Environment: ${process.env.NODE_ENV}`);
  console.log(`🌱 MongoDb URL: ${process.env.MONGO_URL}`);
  console.log('*************************************************************');
})();
