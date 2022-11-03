import { v4 as uuid } from 'uuid';
import { bagSectionFixtureFactory } from '../infrastructure/typeorm/bag-section/bag-section.fixture-factory';
import { BagSectionTypeOrmEntity } from '../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { itemFixtureFactory } from '../infrastructure/typeorm/item/item.fixture-factory';
import { ItemTypeOrmEntity } from '../infrastructure/typeorm/item/item.typeorm-entity';

export const bagSectionId = uuid();
export const bagSection = bagSectionFixtureFactory({ id: bagSectionId });
export const item = itemFixtureFactory({ bagSectionId });
export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,
    items: [bagSection],
  },
  {
    tableName: ItemTypeOrmEntity.name,
    items: [item],
  },
];
