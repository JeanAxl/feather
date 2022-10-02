import { IMutation, IQuery } from './graphql-generated-types';
export type Await<T> = T extends Promise<infer U> ? U : T;
type GraphQLGeneratedQueryAndMutation = IQuery & IMutation;

export type GraphQLReturn<T extends keyof GraphQLGeneratedQueryAndMutation> =
  Await<ReturnType<GraphQLGeneratedQueryAndMutation[T]>>;
