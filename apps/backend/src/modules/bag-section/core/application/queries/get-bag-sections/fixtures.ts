import { v4 as uuid } from 'uuid';
import { bagSectionFixtureFactory } from '../../../../infrastructure/typeorm/bag-section/bag-section.fixture-factory';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { itemFixtureFactory } from '../../../../infrastructure/typeorm/item/item.fixture-factory';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
const bagSectionId = uuid();
export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,
    items: [bagSectionFixtureFactory({ id: bagSectionId })],
  },
  {
    tableName: ItemTypeOrmEntity.name,
    items: [
      itemFixtureFactory({ bagSectionId }),
      itemFixtureFactory({ bagSectionId }),
      itemFixtureFactory({ bagSectionId }),
    ],
  },
];
