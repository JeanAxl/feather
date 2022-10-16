import React, { FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';

import { BagSectionComponent } from './bag-section.presentation';
import {
  addItemInBag,
  deleteItemInBag,
  selectBagSection,
  updateItemInBag,
} from '../infrastructure/redux/bag-section.reducer';
import { useBagSection } from '../infrastructure/react-query/useBagSection.hook';
import { Button } from '@chakra-ui/react';

export const BagSectionContainer: FunctionComponent = () => {
  const bagSection = useAppSelector(selectBagSection);
  const dispatch = useAppDispatch();
  const { data, isSuccess, updateBagSection } = useBagSection();
  console.log(data, isSuccess);
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
