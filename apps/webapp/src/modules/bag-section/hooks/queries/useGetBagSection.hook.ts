import { useBagSectionQuery } from '@feather/graphql-client';
import { useMemo } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';
import { BagSection } from '../../core/domain/bag.model';

type UseGetBagSectionReturnType = {
  bagSection: BagSection | null;
  isLoading: boolean;
  isError: boolean;
};

export const useGetBagSection = (): UseGetBagSectionReturnType => {
  const { data, isLoading, isError, isSuccess } = useBagSectionQuery(
    graphqlClient,
    { id: '1' }
  );

  const bagSection = useMemo(() => {
    if (isSuccess && data.bagSection) {
      const { id, name, items } = data.bagSection;
      return new BagSection(id, name, items);
    }
    return null;
  }, [isSuccess, data]);

  return { isLoading, isError, bagSection };
};
