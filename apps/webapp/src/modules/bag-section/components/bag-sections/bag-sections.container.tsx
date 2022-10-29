import { FunctionComponent } from 'react';
import { useAddItemInBagSection } from '../../hooks/mutations/useAddItemInBagSection.hook';
import { useDeleteItemInBagSection } from '../../hooks/mutations/useDeleteItemInBagSection.hook';
import { useUpdateInBagSection } from '../../hooks/mutations/useUpdateItemInBagSection.hook';
import { useGetBagSections } from '../../hooks/queries/useGetBagSections.hook';
import { BagSectionsComponent } from './bag-sections.presentation';

export const BagSectionsContainer: FunctionComponent = () => {
  const { bagSections, isLoading, isError } = useGetBagSections();
  const { updateItemInBagSection } = useUpdateInBagSection();
  const { addItemInBagSection } = useAddItemInBagSection();
  const { deleteItemInBagSection } = useDeleteItemInBagSection();

  if (isLoading) {
    return <div>IS LOADING</div>;
  }
  if (isError) {
    return <div>IS ERROR</div>;
  }

  return (
    <BagSectionsComponent
      bagSections={bagSections}
      addItemInBag={addItemInBagSection}
      updateItemInBag={updateItemInBagSection}
      deleteItemInBag={deleteItemInBagSection}
    ></BagSectionsComponent>
  );
};
