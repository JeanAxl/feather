import { useBagSectionQuery } from '@feather/graphql-client';
import { graphqlClient } from '../../../../shared/graphql/client';

export const useBagSection = () => {
  const { data, isSuccess } = useBagSectionQuery(graphqlClient, {
    id: '1',
  });
  return { data, isSuccess };
};
