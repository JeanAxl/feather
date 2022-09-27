import React, { FunctionComponent } from 'react';
import { BagSectionQuery, useBagSectionQuery } from '@feather/graphql-client';
import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks';
import {
  addItemInBag,
  deleteItemInBag,
  selectBagSection,
  updateItemInBag,
} from '../infrastructure/bag-section.reducer';
import { BagSectionComponent } from './bag-section.presentation';
import { graphqlClient } from '../../../shared/graphql/client';

export const BagSectionContainer: FunctionComponent = () => {
  const bagSection = useAppSelector(selectBagSection);
  const dispatch = useAppDispatch();

  const data = useBagSectionQuery<BagSectionQuery>(graphqlClient);

  console.log(data);

  return (
    <BagSectionComponent
      bagSection={bagSection}
      addItemInBag={(item) => dispatch(addItemInBag(item))}
      updateItemInBag={(id, input) => dispatch(updateItemInBag({ id, input }))}
      deleteItemInBag={(id) => dispatch(deleteItemInBag(id))}
    />
  );
};
