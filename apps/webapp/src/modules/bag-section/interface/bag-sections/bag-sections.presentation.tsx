import { FunctionComponent } from 'react';
import { BagSection } from '../../core/bag.model';
import { BagSectionComponent } from '../bag-section/bag-section.presentation';

type Props = {
  bagSections: BagSection[];
};
export const BagSectionsComponent: FunctionComponent<Props> = ({
  bagSections,
}) => {
  return (
    <div>
      {bagSections.map((bagSection) => (
        <BagSectionComponent
          bagSection={bagSection}
          addItemInBag={() => ({})}
          deleteItemInBag={() => ({})}
          updateItemInBag={() => ({})}
        />
      ))}
    </div>
  );
};
