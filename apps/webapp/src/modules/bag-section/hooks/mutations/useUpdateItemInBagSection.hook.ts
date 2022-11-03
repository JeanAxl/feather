import { useUpdateItemInBagSectionMutation } from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';
import { ItemReadModel } from '../../core/domain/item.model';

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
    (id: ItemReadModel['id'], input: Partial<ItemReadModel>) => {
      updateItemInBagSectionMutation.mutate({ input: { id, ...input } });
    },
    [updateItemInBagSectionMutation]
  );

  return {
    updateItemInBagSection,
  };
};
