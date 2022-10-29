import { FunctionComponent } from 'react';
import { useAddItemInBagSection } from '../../hooks/mutations/useAddItemInBagSection.hook';
import { useDeleteItemInBagSection } from '../../hooks/mutations/useDeleteItemInBagSection.hook';
import { useUpdateInBagSection } from '../../hooks/mutations/useUpdateItemInBagSection.hook';
import { useGetBagSection } from '../../hooks/queries/useGetBagSection.hook';

import { BagSectionComponent } from './bag-section.presentation';

export const BagSectionContainer: FunctionComponent = () => {
  const { bagSection } = useGetBagSection();
  const { updateItemInBagSection } = useUpdateInBagSection();
  const { addItemInBagSection } = useAddItemInBagSection();
  const { deleteItemInBagSection } = useDeleteItemInBagSection();

  if (!bagSection) {
    return null;
  }

  return (
    <BagSectionComponent
      bagSection={bagSection}
      addItemInBag={addItemInBagSection}
      updateItemInBag={updateItemInBagSection}
      deleteItemInBag={deleteItemInBagSection}
    />
  );
};
