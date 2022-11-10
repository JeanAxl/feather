import { SimpleGrid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../core/domain/bag.model';
import { BagSectionComponent } from '../bag-section/bag-section.presentation';
import { AddBagSection } from '../bag-section/sub-components/add-bag-section';
import {
  AddBagSectionFn,
  AddItemInBagSectionFn,
  DeleteBagSectionFn,
  DeleteItemInBagFn,
  UpdateBagSectionFn,
  UpdateItemInBagFn,
} from '../interface';

type Props = {
  bagSections: BagSection[];
  addItemInBag: AddItemInBagSectionFn;
  updateItemInBag: UpdateItemInBagFn;
  deleteItemInBag: DeleteItemInBagFn;
  addBagSection: AddBagSectionFn;
  deleteBagSection: DeleteBagSectionFn;
  updateBagSection: UpdateBagSectionFn;
};

export const BagSectionsComponent: FunctionComponent<Props> = ({
  bagSections,
  addItemInBag,
  updateItemInBag,
  deleteItemInBag,
  addBagSection,
  deleteBagSection,
  updateBagSection,
}) => {
  return (
    <SimpleGrid columns={1} spacing={6}>
      {bagSections.map((bagSection) => (
        <BagSectionComponent
          key={bagSection.getId()}
          bagSection={bagSection}
          addItemInBag={addItemInBag}
          updateItemInBag={updateItemInBag}
          deleteItemInBag={deleteItemInBag}
          deleteBagSection={deleteBagSection}
          updateBagSection={updateBagSection}
        />
      ))}
      <AddBagSection addBagSection={addBagSection} />
    </SimpleGrid>
  );
};
