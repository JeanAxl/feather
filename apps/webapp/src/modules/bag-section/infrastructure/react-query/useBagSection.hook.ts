import {
  useBagSectionQuery,
  useUpdateBagSectionMutation,
} from '@feather/graphql-client';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';

export const useBagSection = () => {
  const queryClient = useQueryClient();
  const { data, isSuccess } = useBagSectionQuery(graphqlClient, {
    id: '1',
  });

  const mutation = useUpdateBagSectionMutation(graphqlClient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['bagSection']);
    },
  });
  const updateBagSection = useCallback(() => {
    mutation.mutate({
      input: {
        id: '1',
        name: 'New name - ' + new Date().toString(),
        items: [],
      },
    });
  }, [mutation]);

  return { data, isSuccess, updateBagSection };
};
