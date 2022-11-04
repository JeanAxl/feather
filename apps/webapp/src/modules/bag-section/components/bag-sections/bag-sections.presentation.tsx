import { SimpleGrid } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../core/domain/bag.model';
import { ItemReadModel, ItemWriteModel } from '../../core/domain/item.model';
import { BagSectionComponent } from '../bag-section/bag-section.presentation';
import { AddBagSection } from '../bag-section/sub-components/add-bag-section';

type Props = {
  bagSections: BagSection[];
  addItemInBag: (item: ItemWriteModel) => void;
  updateItemInBag: (
    id: ItemReadModel['id'],
    input: Partial<ItemReadModel>
  ) => void;
  deleteItemInBag: (id: ItemReadModel['id']) => void;
  addBagSection: () => void;
};
export const BagSectionsComponent: FunctionComponent<Props> = ({
  bagSections,
  addItemInBag,
  updateItemInBag,
  deleteItemInBag,
  addBagSection,
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
        />
      ))}
      <AddBagSection addBagSection={addBagSection} />
    </SimpleGrid>
  );
};
