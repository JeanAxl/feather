import {
  useBagSectionQuery,
  useDeleteItemInBagSectionMutation,
  useUpdateBagSectionMutation,
} from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';
import { BagSection } from '../../core/bag.model';

export const useBagSection = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess, status } = useBagSectionQuery(graphqlClient, {
    id: '1',
  });

  const updateBagSectionMutation = useUpdateBagSectionMutation(graphqlClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['bagSection']);
    },
  });

  const deleteItemInBagMutation = useDeleteItemInBagSectionMutation(
    graphqlClient,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['bagSection']);
      },
    }
  );

  const updateBagSection = useCallback(() => {
    updateBagSectionMutation.mutate({
      input: {
        id: '1',
        name: 'New name - ' + new Date().getTime(),
      },
    });
  }, [updateBagSectionMutation]);

  const deleteItemInBagSection = useCallback(
    (itemId: string) => {
      deleteItemInBagMutation.mutate({
        itemId,
      });
    },
    [deleteItemInBagMutation]
  );

  const bagSection = data?.bagSection
    ? new BagSection(data.bagSection.name, data.bagSection.items)
    : null;

  return {
    bagSection,
    isSuccess,
    status,
    updateBagSection,
    deleteItemInBagSection,
  };
};
