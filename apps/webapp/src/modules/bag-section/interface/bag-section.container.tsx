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

export const BagSectionContainer: FunctionComponent = () => {
  const bagSection = useAppSelector(selectBagSection);
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useBagSection();
  console.log(data, isSuccess);
  return (
    <BagSectionComponent
      bagSection={bagSection}
      addItemInBag={(item) => dispatch(addItemInBag(item))}
      updateItemInBag={(id, input) => dispatch(updateItemInBag({ id, input }))}
      deleteItemInBag={(id) => dispatch(deleteItemInBag(id))}
    />
  );
};
