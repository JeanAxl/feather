import * as Types from '../../types';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type BagSectionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BagSectionsQuery = { __typename?: 'Query', bagSections: Array<{ __typename?: 'BagSection', id: string, name: string, items: Array<{ __typename?: 'Item', id: string, name: string, description: string, quantity: number, weight: number, bagSectionId: string }> }> };


export const BagSectionsDocument = `
    query bagSections {
  bagSections {
    id
    name
    items {
      id
      name
      description
      quantity
      weight
      bagSectionId
    }
  }
}
    `;
export const useBagSectionsQuery = <
      TData = BagSectionsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: BagSectionsQueryVariables,
      options?: UseQueryOptions<BagSectionsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<BagSectionsQuery, TError, TData>(
      variables === undefined ? ['bagSections'] : ['bagSections', variables],
      fetcher<BagSectionsQuery, BagSectionsQueryVariables>(client, BagSectionsDocument, variables, headers),
      options
    );