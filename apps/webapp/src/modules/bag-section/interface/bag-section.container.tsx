import React, { FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';

import { BagSectionComponent } from './bag-section.presentation';
import { TestComponent } from './components/test.component';
import {
  addItemInBag,
  deleteItemInBag,
  selectBagSection,
  updateItemInBag,
} from '../infrastructure/redux/bag-section.reducer';

export const BagSectionContainer: FunctionComponent = () => {
  const bagSection = useAppSelector(selectBagSection);
  const dispatch = useAppDispatch();

  return (
    <>
      <TestComponent></TestComponent>
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
