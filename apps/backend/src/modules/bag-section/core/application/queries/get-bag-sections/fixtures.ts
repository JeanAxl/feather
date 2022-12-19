import { v4 as uuid } from 'uuid';
import { bagSectionFixtureFactory } from '../../../../infrastructure/typeorm/bag-section/bag-section.fixture-factory';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { itemFixtureFactory } from '../../../../infrastructure/typeorm/item/item.fixture-factory';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
import { unitFixtureFactory } from '../../../../infrastructure/typeorm/unit/unit.fixture-factory';
import { UnitTypeOrmEntity } from '../../../../infrastructure/typeorm/unit/unit.typeorm-entity';
const bagSectionId = uuid();
const unitId = uuid();
export const unit = unitFixtureFactory({
  id: unitId,
  label: 'kg',
  name: 'kilogramme',
});
export const bagSection = bagSectionFixtureFactory({ id: bagSectionId });
export const item = itemFixtureFactory({ bagSectionId, unitId });
export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,
    items: [bagSection],
  },
  {
    tableName: UnitTypeOrmEntity.name,
    items: [unit],
  },
  {
    tableName: ItemTypeOrmEntity.name,
    items: [item],
  },
];
