import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type UpdateItemInBagSectionMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UpdateItemInBagSectionInput>;
}>;


export type UpdateItemInBagSectionMutation = { __typename?: 'Mutation', updateItemInBagSection: boolean };


export const UpdateItemInBagSectionDocument = `
    mutation updateItemInBagSection($input: UpdateItemInBagSectionInput) {
  updateItemInBagSection(input: $input)
}
    `;
export const useUpdateItemInBagSectionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateItemInBagSectionMutation, TError, UpdateItemInBagSectionMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateItemInBagSectionMutation, TError, UpdateItemInBagSectionMutationVariables, TContext>(
      ['updateItemInBagSection'],
      (variables?: UpdateItemInBagSectionMutationVariables) => fetcher<UpdateItemInBagSectionMutation, UpdateItemInBagSectionMutationVariables>(client, UpdateItemInBagSectionDocument, variables, headers)(),
      options
    );