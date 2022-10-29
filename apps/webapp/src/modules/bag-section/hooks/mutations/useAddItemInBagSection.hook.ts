import { useAddItemInBagSectionMutation } from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';
import { Item } from '../../core/domain/item.model';

export const useAddItemInBagSection = (): {
  addItemInBagSection: (item: Item) => void;
} => {
  const queryClient = useQueryClient();
  const addItemInBagSectionMutation = useAddItemInBagSectionMutation(
    graphqlClient,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['bagSections']);
      },
    }
  );
  const addItemInBagSection = useCallback(
    (item: Item) => {
      addItemInBagSectionMutation.mutate({
        input: item,
      });
    },
    [addItemInBagSectionMutation]
  );

  return { addItemInBagSection };
};
