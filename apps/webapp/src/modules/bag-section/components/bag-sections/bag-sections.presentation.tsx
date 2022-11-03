import { FunctionComponent } from 'react';
import { BagSection } from '../../core/domain/bag.model';
import { ItemReadModel, ItemWriteModel } from '../../core/domain/item.model';
import { BagSectionComponent } from '../bag-section/bag-section.presentation';

type Props = {
  bagSections: BagSection[];
  addItemInBag: (item: ItemWriteModel) => void;
  updateItemInBag: (
    id: ItemReadModel['id'],
    input: Partial<ItemReadModel>
  ) => void;
  deleteItemInBag: (id: ItemReadModel['id']) => void;
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
