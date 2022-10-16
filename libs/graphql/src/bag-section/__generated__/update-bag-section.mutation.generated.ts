import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type UpdateSectionMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UpdateBagSectionInput>;
}>;


export type UpdateSectionMutation = { __typename?: 'Mutation', updateSection: boolean };


export const UpdateSectionDocument = `
    mutation updateSection($input: UpdateBagSectionInput) {
  updateSection(input: $input)
}
    `;
export const useUpdateSectionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateSectionMutation, TError, UpdateSectionMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateSectionMutation, TError, UpdateSectionMutationVariables, TContext>(
      ['updateSection'],
      (variables?: UpdateSectionMutationVariables) => fetcher<UpdateSectionMutation, UpdateSectionMutationVariables>(client, UpdateSectionDocument, variables, headers)(),
      options
    );