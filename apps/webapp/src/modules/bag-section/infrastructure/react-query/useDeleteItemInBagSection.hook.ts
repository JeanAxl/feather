import { useDeleteItemInBagSectionMutation } from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';

export const useDeleteItemInBagSection = () => {
  const queryClient = useQueryClient();
  const deleteItemInBagMutation = useDeleteItemInBagSectionMutation(
    graphqlClient,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['bagSection']);
      },
    }
  );

  const deleteItemInBagSection = useCallback(
    (itemId: string) => {
      deleteItemInBagMutation.mutate({
        itemId,
      });
    },
    [deleteItemInBagMutation]
  );

  return {
    deleteItemInBagSection,
  };
};
