import { FunctionComponent } from 'react';
import {
  BagSectionQuery,
  UpdateBagSectionMutation,
  useBagSectionQuery,
  useUpdateBagSectionMutation,
} from '@feather/graphql-client';
import { graphqlClient } from '../../../../shared/graphql/client';
import { Button } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

export const TestComponent: FunctionComponent = () => {
  const queryClient = useQueryClient();

  const { data, isSuccess } =
    useBagSectionQuery<BagSectionQuery>(graphqlClient);

  const mutation = useUpdateBagSectionMutation<UpdateBagSectionMutation>(
    graphqlClient,
    {
      onSuccess: () => {
        console.log('Oui non ??');
        queryClient.invalidateQueries(['bagSection']);
      },
    }
  );
  return (
    <div>
      {isSuccess && data?.bagSection?.name}
      <Button
        onClick={() => {
          mutation.mutate({ input: { name: 'New name', items: [] } });
        }}
      >
        Update
      </Button>
    </div>
  );
};
