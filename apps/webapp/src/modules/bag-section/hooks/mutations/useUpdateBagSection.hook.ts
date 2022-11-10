import { useUpdateBagSectionMutation } from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';
import { BagSection, BagSectionWriteModel } from '../../core/domain/bag.model';

export const useUpdateBagSection = () => {
  const queryClient = useQueryClient();

  const updateBagSectionMutation = useUpdateBagSectionMutation(graphqlClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['bagSections']);
    },
  });

  const updateBagSection = useCallback(
    (id: BagSection['id'], input: BagSectionWriteModel) => {
      updateBagSectionMutation.mutate({ input: { id, ...input } });
    },
    [updateBagSectionMutation]
  );

  return {
    updateBagSection,
  };
};
