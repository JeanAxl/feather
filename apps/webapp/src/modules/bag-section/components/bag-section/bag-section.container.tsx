import { FunctionComponent } from 'react';
import { useAddItemInBagSection } from '../../infrastructure/react-query/useAddItemInBagSection.hook';
import { useDeleteItemInBagSection } from '../../infrastructure/react-query/useDeleteItemInBagSection.hook';
import { useGetBagSection } from '../../infrastructure/react-query/useGetBagSection.hook';
import { useUpdateInBagSection } from '../../infrastructure/react-query/useUpdateItemInBagSection.hook';

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
      addItemInBag={(item) => addItemInBagSection(item)}
      updateItemInBag={(id, input) => updateItemInBagSection(id, input)}
      deleteItemInBag={(id) => deleteItemInBagSection(id)}
    />
  );
};
