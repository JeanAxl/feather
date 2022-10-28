import { useBagSectionsQuery } from '@feather/graphql-client';
import { useMemo } from 'react';
import { graphqlClient } from '../../../../shared/graphql/client';
import { BagSection } from '../../core/domain/bag.model';

type UseGetBagSectionsReturnType = {
  bagSections: BagSection[];
  isLoading: boolean;
  isError: boolean;
};

export const useGetBagSections = (): UseGetBagSectionsReturnType => {
  const { data, isLoading, isError, isSuccess } =
    useBagSectionsQuery(graphqlClient);

  const bagSections = useMemo(() => {
    if (isSuccess) {
      return data.bagSections.map(
        (el) => new BagSection(el.id, el.name, el.items)
      );
    }
    return [];
  }, [isSuccess, data]);

  return { isLoading, isError, bagSections };
};
