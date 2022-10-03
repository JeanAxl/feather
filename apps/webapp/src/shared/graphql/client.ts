import { GraphQLClient } from 'graphql-request';
console.log(process.env['NODE_ENV']);
const graphqlEndpoint =
  process.env['NODE_ENV'] === 'production'
    ? 'https://us-central1-feather-22710.cloudfunctions.net/api/graphql'
    : 'http://localhost:3333/graphql';
export const graphqlClient = new GraphQLClient(graphqlEndpoint);
