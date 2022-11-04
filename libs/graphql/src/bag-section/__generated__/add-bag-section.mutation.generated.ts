import * as Types from '../../types';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
export type AddBagSectionMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.AddBagSectionInput>;
}>;

export type AddBagSectionMutation = {
  __typename?: 'Mutation';
  addBagSection: boolean;
};

export const AddBagSectionDocument = `
    mutation addBagSection($input: AddBagSectionInput) {
  addBagSection(input: $input)
}
    `;
export const useAddBagSectionMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    AddBagSectionMutation,
    TError,
    AddBagSectionMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<
    AddBagSectionMutation,
    TError,
    AddBagSectionMutationVariables,
    TContext
  >(
    ['addBagSection'],
    (variables?: AddBagSectionMutationVariables) =>
      fetcher<AddBagSectionMutation, AddBagSectionMutationVariables>(
        client,
        AddBagSectionDocument,
        variables,
        headers
      )(),
    options
  );
