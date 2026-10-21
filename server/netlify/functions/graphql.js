
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const { authMiddleware } = require('../../utils/auth');
const { typeDefs, resolvers } = require('../../schemas');

const app = express();

app.use(cors());
app.use(express.json());

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

let initialization;

async function initialize() {
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not configured');
  }

  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
  }

  await apollo.start();

  app.use(
    '/graphql',
    expressMiddleware(apollo, {
      context: authMiddleware,
    })
  );

  return serverless(app);
}

exports.handler = async (event, context) => {
  if (!initialization) {
    initialization = initialize().catch((error) => {
      initialization = undefined;
      throw error;
    });
  }

  const handler = await initialization;
  return handler(event, context);
};
