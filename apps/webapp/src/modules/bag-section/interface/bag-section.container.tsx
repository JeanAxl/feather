import { FunctionComponent } from 'react';
import { useAppDispatch } from '../../../shared/redux/hooks';

import { Button } from '@chakra-ui/react';
import { useBagSection } from '../infrastructure/react-query/useBagSection.hook';
import { updateItemInBag } from '../infrastructure/redux/bag-section.reducer';
import { BagSectionComponent } from './bag-section.presentation';

export const BagSectionContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {
    bagSection,
    addItemInBagSection,
    updateBagSection,
    deleteItemInBagSection,
  } = useBagSection();

  if (!bagSection) {
    return null;
  }

  return (
    <>
      <Button onClick={() => updateBagSection()}>Click biche</Button>

      <BagSectionComponent
        bagSection={bagSection}
        addItemInBag={(item) => addItemInBagSection(item)}
        updateItemInBag={(id, input) =>
          dispatch(updateItemInBag({ id, input }))
        }
        deleteItemInBag={(id) => deleteItemInBagSection(id)}
      />
    </>
  );
};
