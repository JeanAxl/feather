import { useDeleteBagSectionMutation } from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';

export const useDeleteBagSection = () => {
  const queryClient = useQueryClient();
  const deleteBagMutation = useDeleteBagSectionMutation(graphqlClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['bagSections']);
    },
  });

  const deleteBagSection = useCallback(
    (bagSectionId: string) => {
      deleteBagMutation.mutate({
        bagSectionId,
      });
    },
    [deleteBagMutation]
  );

  return {
    deleteBagSection,
  };
};
