import { useUpdateItemInBagSectionMutation } from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';
import { Item } from '../../core/domain/item.model';

export const useUpdateInBagSection = () => {
  const queryClient = useQueryClient();

  const updateItemInBagSectionMutation = useUpdateItemInBagSectionMutation(
    graphqlClient,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['bagSections']);
      },
    }
  );

  const updateItemInBagSection = useCallback(
    (id: Item['id'], input: Partial<Item>) => {
      updateItemInBagSectionMutation.mutate({ input: { id, ...input } });
    },
    [updateItemInBagSectionMutation]
  );

  return {
    updateItemInBagSection,
  };
};
