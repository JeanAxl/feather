import { FunctionComponent } from 'react';
import { useAppDispatch } from '../../../shared/redux/hooks';

import { Button } from '@chakra-ui/react';
import { useBagSection } from '../infrastructure/react-query/useBagSection.hook';
import {
  addItemInBag,
  deleteItemInBag,
  updateItemInBag,
} from '../infrastructure/redux/bag-section.reducer';
import { BagSectionComponent } from './bag-section.presentation';

export const BagSectionContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { bagSection, updateBagSection } = useBagSection();

  if (!bagSection) {
    return null;
  }

  return (
    <>
      <Button onClick={() => updateBagSection()}>Click biche</Button>

      <BagSectionComponent
        bagSection={bagSection}
        addItemInBag={(item) => dispatch(addItemInBag(item))}
        updateItemInBag={(id, input) =>
          dispatch(updateItemInBag({ id, input }))
        }
        deleteItemInBag={(id) => dispatch(deleteItemInBag(id))}
      />
    </>
  );
};
