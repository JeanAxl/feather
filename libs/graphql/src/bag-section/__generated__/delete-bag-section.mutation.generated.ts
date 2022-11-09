import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type DeleteBagSectionMutationVariables = Types.Exact<{
  bagSectionId: Types.Scalars['ID'];
}>;


export type DeleteBagSectionMutation = { __typename?: 'Mutation', deleteBagSection: boolean };


export const DeleteBagSectionDocument = `
    mutation deleteBagSection($bagSectionId: ID!) {
  deleteBagSection(bagSectionId: $bagSectionId)
}
    `;
export const useDeleteBagSectionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteBagSectionMutation, TError, DeleteBagSectionMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteBagSectionMutation, TError, DeleteBagSectionMutationVariables, TContext>(
      ['deleteBagSection'],
      (variables?: DeleteBagSectionMutationVariables) => fetcher<DeleteBagSectionMutation, DeleteBagSectionMutationVariables>(client, DeleteBagSectionDocument, variables, headers)(),
      options
    );