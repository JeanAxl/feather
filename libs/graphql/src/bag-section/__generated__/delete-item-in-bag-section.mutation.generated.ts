import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type DeleteItemInBagSectionMutationVariables = Types.Exact<{
  itemId: Types.Scalars['ID'];
}>;


export type DeleteItemInBagSectionMutation = { __typename?: 'Mutation', deleteItemInBagSection: boolean };


export const DeleteItemInBagSectionDocument = `
    mutation deleteItemInBagSection($itemId: ID!) {
  deleteItemInBagSection(itemId: $itemId)
}
    `;
export const useDeleteItemInBagSectionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteItemInBagSectionMutation, TError, DeleteItemInBagSectionMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteItemInBagSectionMutation, TError, DeleteItemInBagSectionMutationVariables, TContext>(
      ['deleteItemInBagSection'],
      (variables?: DeleteItemInBagSectionMutationVariables) => fetcher<DeleteItemInBagSectionMutation, DeleteItemInBagSectionMutationVariables>(client, DeleteItemInBagSectionDocument, variables, headers)(),
      options
    );