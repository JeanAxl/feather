import { FunctionComponent } from 'react';
import { BagSection } from '../../core/bag.model';
import { useBagSections } from '../../infrastructure/react-query/useBagSections.hook';
import { BagSectionsComponent } from './bag-sections.presentation';

export const BagSectionsContainer: FunctionComponent = () => {
  const { data, isLoading, isError } = useBagSections();

  if (isLoading) {
    return <div>IS LOADING</div>;
  }
  if (isError) {
    return <div>IS ERROR</div>;
  }

  return (
    <BagSectionsComponent
      bagSections={data.bagSections.map(
        (el) => new BagSection(el.name, el.items)
      )}
    ></BagSectionsComponent>
  );
};
