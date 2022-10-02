import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type UpdateBagSectionMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UpdateBagSectionInput>;
}>;


export type UpdateBagSectionMutation = { __typename?: 'Mutation', updateBagSection: { __typename?: 'BagSection', name: string } };


export const UpdateBagSectionDocument = `
    mutation updateBagSection($input: UpdateBagSectionInput) {
  updateBagSection(input: $input) {
    name
  }
}
    `;
export const useUpdateBagSectionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateBagSectionMutation, TError, UpdateBagSectionMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateBagSectionMutation, TError, UpdateBagSectionMutationVariables, TContext>(
      ['updateBagSection'],
      (variables?: UpdateBagSectionMutationVariables) => fetcher<UpdateBagSectionMutation, UpdateBagSectionMutationVariables>(client, UpdateBagSectionDocument, variables, headers)(),
      options
    );