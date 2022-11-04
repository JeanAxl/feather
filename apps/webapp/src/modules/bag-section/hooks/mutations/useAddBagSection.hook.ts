import { useAddBagSectionMutation } from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { graphqlClient } from '../../../../shared/graphql/client';
export const useAddBagSection = () => {
  const queryClient = useQueryClient();

  const addBagSectionMutation = useAddBagSectionMutation(graphqlClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['bagSections']);
    },
  });

  const addBagSection = useCallback(() => {
    console.log("c'est moi pierrot");
    addBagSectionMutation.mutate({
      input: { id: uuid(), name: "Pierrot l'Isar" },
    });
  }, [addBagSectionMutation]);

  return {
    addBagSection,
  };
};
