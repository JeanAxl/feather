import { useBagSectionsQuery } from '@feather/graphql-client';
import { graphqlClient } from '../../../../shared/graphql/client';

export const useBagSections = () => {
  const bagSectionsQueryResult = useBagSectionsQuery(graphqlClient);

  return bagSectionsQueryResult;
};
