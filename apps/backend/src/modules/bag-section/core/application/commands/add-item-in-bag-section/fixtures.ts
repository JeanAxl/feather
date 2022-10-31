import { v4 as uuid } from 'uuid';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { itemFixtureFactory } from '../../../../infrastructure/typeorm/item/item.fixture-factory';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
const newBagSectionId = uuid();
console.log(newBagSectionId);
const newItem = itemFixtureFactory({ bagSectionId: newBagSectionId });
console.log(newItem);
export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,
    items: [
      {
        id: newBagSectionId,
        name: 'Some test name',
      },
    ],
  },
  {
    tableName: ItemTypeOrmEntity.name,
    items: [
      itemFixtureFactory({ bagSectionId: newBagSectionId }),
      itemFixtureFactory({ bagSectionId: newBagSectionId }),
      itemFixtureFactory({ bagSectionId: newBagSectionId }),
    ],
  },
];
