import { FunctionComponent } from 'react';
import { useBagSection } from '../../infrastructure/react-query/useBagSection.hook';

import { BagSectionComponent } from './bag-section.presentation';

export const BagSectionContainer: FunctionComponent = () => {
  const {
    bagSection,
    addItemInBagSection,
    deleteItemInBagSection,
    updateItemInBagSection,
  } = useBagSection();

  if (!bagSection) {
    return null;
  }

  return (
    <BagSectionComponent
      bagSection={bagSection}
      addItemInBag={(item) => addItemInBagSection(item)}
      updateItemInBag={(id, input) => updateItemInBagSection(id, input)}
      deleteItemInBag={(id) => deleteItemInBagSection(id)}
    />
  );
};
