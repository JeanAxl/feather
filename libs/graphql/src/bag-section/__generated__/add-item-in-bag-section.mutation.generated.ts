import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type AddItemInBagSectionMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.AddItemInBagSectionInput>;
}>;


export type AddItemInBagSectionMutation = { __typename?: 'Mutation', addItemInBagSection: boolean };


export const AddItemInBagSectionDocument = `
    mutation addItemInBagSection($input: AddItemInBagSectionInput) {
  addItemInBagSection(input: $input)
}
    `;
export const useAddItemInBagSectionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddItemInBagSectionMutation, TError, AddItemInBagSectionMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddItemInBagSectionMutation, TError, AddItemInBagSectionMutationVariables, TContext>(
      ['addItemInBagSection'],
      (variables?: AddItemInBagSectionMutationVariables) => fetcher<AddItemInBagSectionMutation, AddItemInBagSectionMutationVariables>(client, AddItemInBagSectionDocument, variables, headers)(),
      options
    );