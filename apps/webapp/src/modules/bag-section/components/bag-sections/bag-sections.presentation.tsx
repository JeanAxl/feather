import { FunctionComponent } from 'react';
import { BagSection } from '../../core/domain/bag.model';
import { Item } from '../../core/domain/item.model';
import { BagSectionComponent } from '../bag-section/bag-section.presentation';

type Props = {
  bagSections: BagSection[];
  addItemInBag: (item: Item) => void;
  updateItemInBag: (id: Item['id'], input: Partial<Item>) => void;
  deleteItemInBag: (id: Item['id']) => void;
};
export const BagSectionsComponent: FunctionComponent<Props> = ({
  bagSections,
  addItemInBag,
  updateItemInBag,
  deleteItemInBag,
}) => {
  return (
    <div>
      {bagSections.map((bagSection) => (
        <BagSectionComponent
          key={bagSection.getId()}
          bagSection={bagSection}
          addItemInBag={addItemInBag}
          updateItemInBag={updateItemInBag}
          deleteItemInBag={deleteItemInBag}
        />
      ))}
    </div>
  );
};
