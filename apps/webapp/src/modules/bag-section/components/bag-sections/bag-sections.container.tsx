import { FunctionComponent } from 'react';
import { useGetBagSections } from '../../infrastructure/react-query/useBagSections.hook';
import { BagSectionsComponent } from './bag-sections.presentation';

export const BagSectionsContainer: FunctionComponent = () => {
  const { bagSections, isLoading, isError } = useGetBagSections();

  if (isLoading) {
    return <div>IS LOADING</div>;
  }
  if (isError) {
    return <div>IS ERROR</div>;
  }

  return (
    <BagSectionsComponent bagSections={bagSections}></BagSectionsComponent>
  );
};
